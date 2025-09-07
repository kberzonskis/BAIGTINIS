import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { getLogin } from './src/api/public/getLogin.js';
import { cookieParser } from './src/middleware/cookieParser.js';
import { userData } from './src/middleware/userData.js';
import { isPublic } from './src/middleware/isPublic.js';
import { isAdmin } from './src/middleware/isAdmin.js';
import { postPublicRegister } from './src/api/public/postRegister.js';
import { postPublicLogin } from './src/api/public/postLogin.js';

import { postAdminFoods } from './src/api/admin/foods/postFoods.js';
import { getPublicFoods } from './src/api/public/getFoods.js';
import { getAdminFoods } from './src/api/admin/foods/getFoods.js';
import { putAdminFoods } from './src/api/admin/foods/putFoods.js';
import { deleteAdminFoods } from './src/api/admin/foods/deleteFoods.js';


import { getPublicProducts } from './src/api/public/getProducts.js';
import { getAdminProducts } from './src/api/admin/products/getProducts.js';
import { postAdminProducts } from './src/api/admin/products/postProducts.js';
import { putAdminProducts } from './src/api/admin/products/putProducts.js';
import { deleteAdminProducts } from './src/api/admin/products/deleteProducts.js'

import { uploadProductThumbnailImage } from './src/middleware/uploadProductThumbnail.js';
import { postImageUpload } from './src/api/admin/Products/postImageUpload.js';


const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(helmet());
app.use(cors({
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    origin: 'http://localhost:5533',
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

app.get('/api/foods', getPublicFoods);
app.get('/api/products', getPublicProducts);

app.get('/api/login', isAdmin, getLogin);

app.get('/api/admin/foods', isAdmin, getAdminFoods);
app.post('/api/admin/foods', isAdmin, postAdminFoods);
app.put('/api/admin/foods/:original_url', isAdmin, putAdminFoods);
app.delete('/api/admin/foods/:url', isAdmin, deleteAdminFoods);

app.get('/api/admin/products', isAdmin, getAdminProducts);
app.post('/api/admin/products', isAdmin, postAdminProducts);
app.put('/api/admin/products/:original_url', isAdmin, putAdminProducts);
app.delete('/api/admi/products/:url', isAdmin, deleteAdminProducts);

app.post('/api/admin/upload-image', isAdmin, uploadProductThumbnailImage.single('img'), postImageUpload);
app.use((err, req, res, next) => {
    if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
            status: 'error',
            msg: `Virsytas failo limitas (${formatFileSize(FILE_SIZE_LIMIT)})`,
        });
    }

    console.log(err);
 return res.status(500).send('Server error');
});



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


app.listen(5530, () => {
    console.log(`Server running: http://localhost:5530`);
});