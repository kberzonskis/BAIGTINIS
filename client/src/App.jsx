import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage } from './pages/public/Home';
import { PublicLayout } from './templates/PublicLayout';
import { Page404 } from './pages/public/Page404';

import { FoodsPage } from './pages/public/Foods';
import { ProductsPage } from './pages/public/Products';
import { FoodInnerPage } from './pages/public/FoodInner';
import { ProductInnerPage } from './pages/public/ProductInner';

import { RegisterPage } from './pages/public/Register';
import { LoginPage } from './pages/public/Login';

import { AdminDasboardPage } from './pages/admin/Dashboard';
import { AdminLayout } from './templates/AdminLayout';

import {AdminFoodsAllPage}  from './pages/admin/foods/FoodsAll'; 
import {AdminFoodNewPage} from './pages/admin/foods/FoodNew'; 
import {AdminFoodViewPage} from './pages/admin/foods/FoodView';
import {AdminFoodsEditPage} from './pages/admin/foods/FoodsEdit'; 
import {AdminFoodsPublishedPage} from './pages/admin/foods/FoodsPublished'; 
import {AdminFoodsDraftPage} from './pages/admin/foods/FoodsDraft';

import { AdminProductsAllPage } from './pages/admin/products/ProductsAll';
import { AdminProductNewPage } from './pages/admin/products/ProductNew';
import { AdminProductsViewPage } from './pages/admin/products/ProductsView';
import { AdminProductEditPage } from './pages/admin/products/ProductsEdit';
import { AdminProductsPublishedPage } from './pages/admin/products/ProductsPublished';
import { AdminProductsDraftPage } from './pages/admin/products/ProductsDraft';
import { LogoutPage } from './pages/public/Logout';

import { UserContextWrapper } from './context/user/UserContextWrapper';
import { FoodsContextWrapper } from './context/foods/FoodsContextWrapper';
import { ProductsContextWrapper} from './context/products/ProductsContextWrapper';


export function App() {
return (
<UserContextWrapper>
  <FoodsContextWrapper>
  <ProductsContextWrapper>
  <BrowserRouter>
    <Routes>

      <Route element={<PublicLayout />}>
      <Route path='/' element={<HomePage />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/products/:product' element={<ProductInnerPage />} />
      <Route path='/foods' element={<FoodsPage />} />
      <Route path='/foods/:food' element={<FoodInnerPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/logout' element={<LogoutPage />} />

    </Route>
             
      <Route element={<AdminLayout />}>
      <Route path='/admin' element={<AdminDasboardPage />} />

      <Route path='/admin/products' element={<AdminProductsAllPage />} />
      <Route path='/admin/products/new' element={<AdminProductNewPage />} />
      <Route path='/admin/products/:product' element={<AdminProductsViewPage />} />
      <Route path='/admin/products/:product/edit' element={<AdminProductEditPage />} />
      <Route path='/admin/products/published' element={<AdminProductsPublishedPage />} />
      <Route path='/admin/products/draft' element={<AdminProductsDraftPage />} />

      <Route path='/admin/foods' element={<AdminFoodsAllPage />} />
      <Route path='/admin/foods/new' element={<AdminFoodNewPage />} />
      <Route path='/admin/foods/:foods' element={<AdminFoodViewPage />} />
      <Route path='/admin/foods/:foods/edit' element={<AdminFoodsEditPage />} />
      <Route path='/admin/foods/published' element={<AdminFoodsPublishedPage />} />
      <Route path='/admin/foods/draft' element={<AdminFoodsDraftPage />} /> 

      </Route>

      <Route element={<PublicLayout />}>
      <Route path='*' index element={<Page404 />} />

      </Route>
    </Routes>
  </BrowserRouter>
</ProductsContextWrapper>
</FoodsContextWrapper>
</UserContextWrapper>
);
}

