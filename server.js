import express  from 'express';
import cors from 'cors';

const app = express();

const cors = app.use(cors());

const port = 5000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});