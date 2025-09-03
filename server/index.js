import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { postPublicRegister } from './src/api/public/postRegister.js';
import { postPublicLogin } from './src/api/public/postLogin.js';

import { getLogin } from './src/api/public/getLogin.js';
import { cookieParser } from './src/middleware/cookieParser.js';
import { userData } from './src/middleware/userData.js';

import { postAdminProducts } from './src/api/admin/products/postProducts.js';
import { isAdmin } from './src/middleware/isAdmin.js';
import { getPublicProducts } from './src/api/public/getProducts.js';
import { getAdminProducts } from './src/api/admin/products/getProducts.js';
import { isPublic } from './src/middleware/isPublic.js';





const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors({
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    origin: 'http://localhost:5522',
}));

app.use(cookieParser);
app.use(userData);


app.get('/', (req, res) => {
    return res.json({
        status: 'success',
        message: 'Server is running',
    });
});


app.post('/api/register', isPublic, postPublicRegister);
app.post('/api/login', isPublic, postPublicLogin);

app.get('/api/products', getPublicProducts);

app.get('/api/login', isAdmin, getLogin);
app.get('/api/admin/products', isAdmin, getAdminProducts);
app.post('/api/admin/products', isAdmin, postAdminProducts);





// app.post('/api/login', postLogin);
// app.get('/api/login', getLogin);


app.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).send('Server error');
});

app.get('*error', (req, res) => {
    return res.json({
        status: 'error',
        message: 'No such route',
    });
});


//app.post('/api/register', postRegister);
//app.post('/api/login', postLogin);


app.listen(5520, () => {
    console.log(`Server running: http://localhost:5520`);
});