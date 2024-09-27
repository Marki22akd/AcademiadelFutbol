const express = require('express');
const axios = require('axios');
const NodeCache = require('node-cache');
const router = express.Router();

const cache = new NodeCache({ stdTTL: 10000 });

router.get('/index', async (req, res) => {
  const { fecha, num, token } = req.query;
  console.log(fecha, num, token);

  const cacheKey = `${fecha}-${num}-${token}`;
  const cachedResponse = cache.get(cacheKey);

  if (cachedResponse) {
    console.log('Sirviendo desde caché');
    return res.json(cachedResponse);
  }

  const indexUrl = `https://api.sportradar.com/soccer/trial/v4/en/schedules/${fecha}/summaries.json?start=${num}&api_key=${token}`;

  try {
    const response = await axios.get(indexUrl, { headers: { accept: 'application/json' } });
    cache.set(cacheKey, response.data);
    console.log('Respuesta guardada en caché');
    res.json(response.data);
  } catch (error) {
    console.error('Error al obtener datos de Sportradar:', error);
    res.status(500).json({ error: 'Error al obtener datos de Sportradar' });
  }
});

module.exports = router;
