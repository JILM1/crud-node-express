const Persona = require('../models/Persona');

// Crear uno
exports.crearPersona = async (req, res) => {
  const persona = new Persona(req.body);
  await persona.save();
  res.json(persona);
};

// Leer todos
exports.obtenerPersonas = async (req, res) => {
  const personas = await Persona.find();
  res.json(personas);
};

// Leer uno por ID
exports.obtenerPersonaPorId = async (req, res) => {
  const persona = await Persona.findById(req.params.id);
  res.json(persona);
};

// Actualizar por ID
exports.actualizarPersona = async (req, res) => {
  const persona = await Persona.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(persona);
};

// Eliminar por ID
exports.eliminarPersona = async (req, res) => {
  await Persona.findByIdAndDelete(req.params.id);
  res.json({ mensaje: 'Persona eliminada' });
};

// Eliminar masivo
exports.eliminarMasivo = async (req, res) => {
  await Persona.deleteMany({ _id: { $in: req.body.ids } });
  res.json({ mensaje: 'Personas eliminadas' });
};

// Crear masivo
exports.crearMasivo = async (req, res) => {
  const personas = await Persona.insertMany(req.body);
  res.json(personas);
};
