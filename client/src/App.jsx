import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage } from './pages/public/Home';
import { PublicLayout } from './templates/PublicLayout';
import { Page404 } from './pages/public/Page404';
import { ProductsPage } from './pages/public/Products';
import { RegisterPage } from './pages/public/Register';
import { LoginPage } from './pages/public/Login';
import { AdminDasboardPage } from './pages/admin/Dashboard';
import { AdminLayout } from './templates/AdminLayout';

import { AdminProductsAllPage } from './pages/admin/products/ProductsAll';
import { AdminProductNewPage } from './pages/admin/products/ProductsNew';
import { AdminProductViewPage } from './pages/admin/products/ProductsView';
import { AdminProductEditPage } from './pages/admin/products/ProductsEdit';
import { AdminProductsPublishedPage } from './pages/admin/products/ProductsPublished';
import { AdminProductsProgresPage } from './pages/admin/products/ProductsProgres';

export function App() {
return (
<BrowserRouter>
  <Routes>
    <Route element={<PublicLayout />}>
    <Route path='/' index element={<HomePage />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/products' index element={<ProductsPage />} />
    </Route>

    <Route element={<AdminLayout />}>
    <Route path='/admin' element={<AdminDasboardPage />} />

    <Route path='/admin/products' element={<AdminProductsAllPage />} />
    <Route path='/admin/products/new' element={<AdminProductNewPage />} />
    <Route path='/admin/products/:product' element={<AdminProductViewPage />} />
    <Route path='/admin/products/:product/edit' element={<AdminProductEditPage />} />
    <Route path='/admin/products/published' element={<AdminProductsPublishedPage />} />
    <Route path='/admin/products/progres' element={<AdminProductsProgresPage />} />

    </Route>

    <Route element={<PublicLayout />}>
    <Route path='*' index element={<Page404 />} />

    </Route>
  </Routes>
</BrowserRouter>
);
}