import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json()); // Express understand requests JSON
app.use(routes);

app.listen(3333);