import express from 'express';
import ViteExpress from 'vite-express';
import axios from 'axios';
import 'dotenv/config';

const app = express();
const port = 5555;

app.use(express.json())

app.post('/api/find-recipe', async (req, res) => {
  const { search } = req.body;
  await axios.get(`https://api.api-ninjas.com/v1/recipe?query=${search}`, {
    headers: {
      'X-Api-Key': process.env.API_NINJA_KEY,
    }
  })
  .then((response) => {
    res.status(200).json({
      message: 'OK',
      recipes: response.data,
    })
  })
  .catch((error) => {
    console.error(error)
    res.status(500).json({
      error: 'Internal Server Error',
      message:'Something went wrong when retrieving the data'
    })
  })
})

ViteExpress.listen(app, port, () => {
  console.log(`Server is live at http://localhost:${port}`);
});