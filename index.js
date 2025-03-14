const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();


app.use(cors());
app.use(express.json());

// Aquí pegas tu URL de Atlas, incluyendo la base de datos al final:
const URL_MONGO = "mongodb+srv://javierleonor1:sbBedzXFQgv59fvp@jleonor.e9azm.mongodb.net/miDB?retryWrites=true&w=majority";


mongoose.connect(URL_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Conectado a MongoDB Atlas");
})
.catch((error) => {
  console.error("Error de conexión a MongoDB Atlas:", error);
  // process.exit(1); // 
});

app.use('/api/personas', require('./routes/persona.routes'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
})
.on('error', (error) => {
  console.error('Error al iniciar el servidor:', error);
});