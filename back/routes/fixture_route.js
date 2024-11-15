const express = require('express');
const axios = require('axios');
const NodeCache = require('node-cache');
const router = express.Router();

const cache = new NodeCache({ stdTTL: 60 });

router.get('/fixture', async (req, res) => {
  const { temporada, token } = req.query;
  console.log(temporada, token);

  const cacheKey = `${temporada}-${token}`;
  const cachedResponse = cache.get(cacheKey);

  if (cachedResponse) {
    console.log('Sirviendo desde caché');
    return res.json(cachedResponse);
  }
  const fixtureUrl = `https://api.sportradar.com/soccer/trial/v4/en/seasons/sr%3Aseason%3A${temporada}/schedules.json?api_key=${token}`

  try {
    const response = await axios.get(fixtureUrl, { headers: { accept: 'application/json' } });
    cache.set(cacheKey, response.data);
    console.log('Respuesta guardada en caché');
    res.json(response.data);
  } catch (error) {
    console.error('Error al obtener datos de Sportradar:', error);
    res.status(500).json({ error: 'Error al obtener datos de Sportradar' });
  }
});

module.exports = router;
