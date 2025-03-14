
const { Router } = require('express');
const router = Router();

const {
  crearPersona,
  obtenerPersonas,
  obtenerPersonaPorId,
  actualizarPersona,
  eliminarPersona,
  eliminarPersonasMasivo,
  agregarPersonasMasivo
} = require('../controllers/persona.controller');


router.post('/', crearPersona);


router.get('/', obtenerPersonas);


router.get('/:id', obtenerPersonaPorId);


router.put('/:id', actualizarPersona);


router.delete('/:id', eliminarPersona);


router.delete('/', eliminarPersonasMasivo);


router.post('/masivo', agregarPersonasMasivo);

module.exports = router;
