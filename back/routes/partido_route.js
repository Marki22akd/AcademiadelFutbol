const express = require('express');
const axios = require('axios');
const NodeCache = require('node-cache');
const router = express.Router();

const cache = new NodeCache({ stdTTL: 5 });

router.get('/partido', async (req, res) => {
  const { id, token } = req.query;
  console.log(id, token);

  const cacheKey = `${id}-${token}`;
  const cachedResponse = cache.get(cacheKey);

  if (cachedResponse) {
    console.log('Sirviendo desde caché');
    return res.json(cachedResponse);
  }
  const partidoUrl = `https://api.sportradar.com/soccer/trial/v4/en/sport_events/sr%3Asport_event%3A${id}/lineups.json?api_key=${token}`

  try {
    const response = await axios.get(partidoUrl, { headers: { accept: 'application/json' } });
    cache.set(cacheKey, response.data);
    console.log('Respuesta guardada en caché');
    res.json(response.data);
  } catch (error) {
    console.error('Error al obtener datos de Sportradar:', error);
    res.status(500).json({ error: 'Error al obtener datos de Sportradar' });
  }
});

module.exports = router;
