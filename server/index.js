import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';

import http from 'http'


dotenv.config();
//keeep server alive

setInterval(() => {
  http.get('https://shirt-ai-generator-backend.onrender.com/', (res) => {
    console.log(`Ping status: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error(`Ping error: ${err.message}`);
  });
}, 30);


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

const server = http.createServer(app);


server.listen(8080, () => console.log('Server has started on port 8080'))





