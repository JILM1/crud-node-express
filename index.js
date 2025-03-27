const express = require('express');
const mongoose = require('mongoose');
const app = express();
const personasRoutes = require('./routes/personas');

mongoose.connect('mongo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado'));

app.use(express.json());
app.use('/api/personas', personasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
