import { useContext } from "react";
import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminFoodsTable } from "../../../components/admin-tables/foods/AdminFoodsTable";
import { FoodsContext } from "../../../context/foods/FoodsContext";
export function AdminFoodsDraftPage() {
       const { adminFoods } = useContext(FoodsContext);
    return (
        <main>
            <AdminPageTitle title="Foods IN PROGRESS" />
            <AdminFoodsTable list={adminFoods.filter(item => item.status_name === 'draft')} />
        

        </main>
    );
}
