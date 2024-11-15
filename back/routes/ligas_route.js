const express = require('express');
const axios = require('axios');
const NodeCache = require('node-cache');
const router = express.Router();

const cache = new NodeCache({ stdTTL: 60000 });

router.get('/ligas', async (req, res) => {
  const { id, token } = req.query;
  console.log(id, token);

  const cacheKey = `${id}-${token}`;
  const cachedResponse = cache.get(cacheKey);

  if (cachedResponse) {
    console.log('Sirviendo desde caché');
    return res.json(cachedResponse);
  }
  const ligasUrl = `https://api.sportradar.com/soccer/trial/v4/en/seasons/sr%3Aseason%3A${id}/standings.json?api_key=${token}`

  try {
    const response = await axios.get(ligasUrl, { headers: { accept: 'application/json' } });
    cache.set(cacheKey, response.data);
    console.log('Respuesta guardada en caché');
    res.json(response.data);
  } catch (error) {
    console.error('Error al obtener datos de Sportradar:', error);
    res.status(500).json({ error: 'Error al obtener datos de Sportradar' });
  }
});

module.exports = router;
