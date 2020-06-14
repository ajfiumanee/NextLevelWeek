import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();
app.use(express.json()); // Express understand requests JSON
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); // Allow access to file urls

app.listen(3333);