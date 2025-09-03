import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage } from './pages/public/Home';
import { PublicLayout } from './templates/PublicLayout';
import { Page404 } from './pages/public/Page404';
import { ProductsPage } from './pages/public/Products';
import { RegisterPage } from './pages/public/Register';
import { LoginPage } from './pages/public/Login';
import { AdminDasboardPage } from './pages/admin/Dashboard';
import { AdminLayout } from './templates/AdminLayout';
import { ProductInnerPage } from './pages/public/ProductsInner';
import { AdminProductsAllPage } from './pages/admin/products/ProductsAll';
import { AdminProductNewPage } from './pages/admin/products/ProductsNew';
import { AdminProductViewPage } from './pages/admin/products/ProductsView';
import { AdminProductEditPage } from './pages/admin/products/ProductsEdit';
import { AdminProductsPublishedPage } from './pages/admin/products/ProductsPublished';
import { AdminProductsDraftPage } from './pages/admin/products/ProductsDraft';
import { LogoutPage } from './pages/public/Logout';
import { UserContextWrapper } from './context/user/UserContextWrapper';

export function App() {
return (
  <UserContextWrapper>
     <BrowserRouter>
  <Routes>
    <Route element={<PublicLayout />}>
    <Route path='/' element={<HomePage />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/logout' element={<LogoutPage />} />
    <Route path='/products' element={<ProductsPage />} />
    <Route path='/products/:product'  element={<ProductInnerPage />} />

    </Route>

    <Route element={<AdminLayout />}>
    <Route path='/admin' element={<AdminDasboardPage />} />

    <Route path='/admin/products' element={<AdminProductsAllPage />} />
    <Route path='/admin/products/new' element={<AdminProductNewPage />} />
    <Route path='/admin/products/:product' element={<AdminProductViewPage />} />
    <Route path='/admin/products/:product/edit' element={<AdminProductEditPage />} />
    <Route path='/admin/products/published' element={<AdminProductsPublishedPage />} />
    <Route path='/admin/products/draft' element={<AdminProductsDraftPage />} />

    </Route>

    <Route element={<PublicLayout />}>
    <Route path='*' index element={<Page404 />} />

    </Route>
  </Routes>
   </BrowserRouter>
 </UserContextWrapper>
);
}