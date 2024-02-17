import express from 'express';
import cors from 'cors';
import connectMongoDB from './config/mongoose.js';

const app = express();

app.use(express.json());
app.use(cors());

connectMongoDB(app);

app.get('/', (req, res) => {
  return res.send('App is listening...');
});

