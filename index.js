const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors())

app.get('/', async(req, res) => {
    let {lat, long} = req.query;
    const { data } = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat || 19}&longitude=${long || 20}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`)
    res.send(data)

})

app.listen(process.env.PORT || 3001);

module.exports = app;
