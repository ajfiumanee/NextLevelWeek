import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('users');
    response.send(['Alberto', 'Lais', 'Mila']);
});

app.listen(3333);