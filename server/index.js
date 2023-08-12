import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';
import http from 'http';
import https from 'https';

dotenv.config();
//keeep server alive

setInterval(() => {
  fetch('https://shirt-ai-generator-backend.onrender.com/ping')
  .then(response => {
    if (response.ok) {
      console.log('Ping successful');
    } else {
      console.error(`Ping failed with status code ${response.status}`);
    }
  })
  .catch(error => {
    console.error('Ping failed:', error);
  });
}, 3000);


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





