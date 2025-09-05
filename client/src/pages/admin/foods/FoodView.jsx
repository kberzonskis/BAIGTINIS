import { useParams } from 'react-router';
import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { Alert } from "../../../components/Alert";
import { useContext } from 'react';
import { FoodsContext } from '../../../context/foods/FoodsContext';
import { AdminFoodViewTable } from '../../../components/admin-tables/foods/AdminFoodViewTable';
import { AdminProductsTable } from '../../../components/admin-tables/products/AdminProductsTable';
import { ProductsContext } from '../../../context/products/ProductsContext';

export function AdminFoodViewPage() {
    const { getAdminFoodByUrlSlug } = useContext(FoodsContext);
    const { adminProducts } = useContext(ProductsContext);
    const { food } = useParams();

    const foodData = getAdminFoodsByUrlSlug(food);

    return (
        <main>
            <AdminPageTitle title={`View foods: "${food}"`} />

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-9 mt-5">
                     {
                            foodData
                                  ? (
                                    <>
                                        <AdminFoodViewTable data={foodData} />
                                      <AdminProductsTable products={adminProducts.filter(m => m.food_id === foodData.id)} /> 
                                    </>
                                )
                                : <Alert text='Norima kategorija nerasta, todel jos perziureti yra neimanomas.' />
                      } </div>
                </div>
            </div>
        </main>
    );
}