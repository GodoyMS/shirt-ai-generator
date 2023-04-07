import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';
import http from 'http';
import https from 'https';

dotenv.config();
//keeep server alive

setInterval(() => {
  http.get('http://shirt-ai-generator-backend.onrender.com/ping', (res) => {
    console.log(`Ping status: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error(`Ping error: ${err.message}`);
  });
}, 300000);


const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }))

app.use("/api/v1/dalle", dalleRoutes);


app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello from DALL.E" })
})
app.get('/ping', (req, res) => {
  res.status(200).send('Ping successful');
});

const server =  new http.createServer(app);


server.listen(8080, () => console.log('Server has started on port 8080'))





