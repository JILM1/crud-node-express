const Persona = require('../models/Persona');


exports.crearPersona = async (req, res) => {
  try {
    const { nombre, edad } = req.body;
    const nuevaPersona = new Persona({ nombre, edad });
    await nuevaPersona.save();

    return res.status(201).json({
      ok: true,
      msg: 'Persona creada exitosamente',
      persona: nuevaPersona
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Error al crear persona',
      error: error.message
    });
  }
};


exports.obtenerPersonas = async (req, res) => {
  try {
    const personas = await Persona.find();
    return res.status(200).json({
      ok: true,
      personas
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Error al obtener personas',
      error: error.message
    });
  }
};


exports.obtenerPersonaPorId = async (req, res) => {
  try {
    const personaId = req.params.id;
    const persona = await Persona.findById(personaId);

    if (!persona) {
      return res.status(404).json({
        ok: false,
        msg: 'Persona no encontrada'
      });
    }

    return res.status(200).json({
      ok: true,
      persona
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Error al obtener persona',
      error: error.message
    });
  }
};

exports.actualizarPersona = async (req, res) => {
  try {
    const personaId = req.params.id;
    const { nombre, edad } = req.body;

    const personaActualizada = await Persona.findByIdAndUpdate(
      personaId,
      { nombre, edad },
      { new: true } 
    );

    if (!personaActualizada) {
      return res.status(404).json({
        ok: false,
        msg: 'Persona no encontrada'
      });
    }

    return res.status(200).json({
      ok: true,
      msg: 'Persona actualizada exitosamente',
      persona: personaActualizada
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Error al actualizar persona',
      error: error.message
    });
  }
};


exports.eliminarPersona = async (req, res) => {
  try {
    const personaId = req.params.id;
    const personaEliminada = await Persona.findByIdAndDelete(personaId);

    if (!personaEliminada) {
      return res.status(404).json({
        ok: false,
        msg: 'Persona no encontrada'
      });
    }

    return res.status(200).json({
      ok: true,
      msg: 'Persona eliminada exitosamente'
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Error al eliminar persona',
      error: error.message
    });
  }
};


exports.eliminarPersonasMasivo = async (req, res) => {
  try {

    const { ids } = req.body;
    await Persona.deleteMany({ _id: { $in: ids } });

    return res.status(200).json({
      ok: true,
      msg: 'Personas eliminadas de manera masiva exitosamente'
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Error al eliminar personas masivamente',
      error: error.message
    });
  }
};


exports.agregarPersonasMasivo = async (req, res) => {
  try {
   
    const { personas } = req.body;
    const resultado = await Persona.insertMany(personas);

    return res.status(201).json({
      ok: true,
      msg: 'Personas agregadas de manera masiva exitosamente',
      resultado
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Error al agregar personas masivamente',
      error: error.message
    });
  }
};
