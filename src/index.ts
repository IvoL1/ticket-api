import express from 'express';
import { router } from './routes/ticketsRoutes';

const app = express();

const PORT = 2000;

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
