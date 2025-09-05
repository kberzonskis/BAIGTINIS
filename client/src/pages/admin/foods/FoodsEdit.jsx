import { useContext } from "react";
import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminFoodForm } from "../../../components/forms/AdminFoodForm";
import { FoodsContext } from "../../../context/foods/FoodsContext";
import { useParams } from "react-router";
import { SERVER_ADDRESS } from "../../../env";
import { Alert } from "../../../components/Alert";



export function AdminFoodsEditPage() {

    const { getAdminFoodsByUrlSlug } = useContext(FoodsContext);
    const { foods } = useParams();

    const foodData = getAdminfoodsByUrlSlug(food);

    return (
        <main>
            <AdminPageTitle title={`Edit food: "${food}"`} />

            <div className="container">
                <div className="row">
                    {
                        foodData
                            ? <AdminFoodForm
                                api={SERVER_ADDRESS + '/api/admin/foods/' + foodData.url_slug}
                                method="PUT"
                                food={foodData} />
                            : (
                                <div className="col-12 col-md-9 mt-5">
                                    <Alert text='toks Foods-tipas nerastas, todel redagavimas yra neimanomas.' />
                                </div>
                            )
                    }
                </div>
            </div>
        </main>
    );
} 
