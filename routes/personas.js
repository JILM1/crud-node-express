const express = require('express');
const router = express.Router();
const controlador = require('../controllers/personaController');

router.post('/', controlador.crearPersona);
router.get('/', controlador.obtenerPersonas);
router.get('/:id', controlador.obtenerPersonaPorId);
router.put('/:id', controlador.actualizarPersona);
router.delete('/:id', controlador.eliminarPersona);
router.delete('/', controlador.eliminarMasivo);
router.post('/masivo', controlador.crearMasivo);

module.exports = router;
