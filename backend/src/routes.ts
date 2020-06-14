import express, { request, response } from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({ message: 'Ok' });
});

export default routes;