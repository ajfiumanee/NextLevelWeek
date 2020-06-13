import express, { request, response } from 'express';

const app = express();
app.use(express.json()); // Express understand requests JSON

// Routes:      Full request -> Semantic
// Resource:    Which antity are we accessing from the system

// GET:         Get one or more information in the Back-end
// POST:        Creating a new information in the Back-end
// PUT:         Updating a information existing in the Back-end
// DELETE:      Remove a information in the Back-end

//POST:         http://localhost:3333/users     ->  Creating a user
//GET:         http://localhost:3333/users      ->  List Users
//GET:         http://localhost:3333/users/5    ->  Get data of the user with ID 5

// Request Param:   Parameter that comes on the route itself to identify a resource
// Query Param:     Parameters that make up the route, usually optional for filters, pagination
// Request Bady:    Parameter to manipulate data

const users = [
    'Alberto',
    'Lais',
    'Amanda',
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];
    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;
    const user = {
        name: data.name,
        email: data.email
    };
    return response.json(user);
});

app.listen(3333);