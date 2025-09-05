import { useContext } from "react";
import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminFoodsTable } from "../../../components/admin-tables/foods/AdminFoodsTable";
import { FoodsContext } from "../../../context/foods/FoodsContext";

export function AdminFoodsAllPage() {
     const { adminFoods } = useContext(FoodsContext);
    return (
        <main>
            <AdminPageTitle title="ALL FOODS"/>
            <AdminFoodsTable list={adminFoods}/>
        </main>
    );
}



