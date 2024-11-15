const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());


const indexRoutes = require('./routes/index_route');
const ligasRoutes = require('./routes/ligas_route');
const copasRoutes = require('./routes/copas_route');
const fixtureRoutes = require('./routes/fixture_route');
const partidoRoutes = require('./routes/partido_route');

app.use('/api', indexRoutes);
app.use('/api', ligasRoutes);
app.use('/api', copasRoutes);
app.use('/api', fixtureRoutes)
app.use('/api', partidoRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
