
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonaSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  edad: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Persona', PersonaSchema);
