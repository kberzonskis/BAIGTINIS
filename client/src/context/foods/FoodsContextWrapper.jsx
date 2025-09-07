import { useContext, useEffect, useState } from "react";
import { FoodsContext } from "./FoodsContext";
import { initialFoodsContext } from "./initialFoodsContext";
import { UserContext } from "../user/UserContext";
import { SERVER_ADDRESS } from "../../env";

export function FoodsContextWrapper(props) {
    const [publicFoods, setPublicFoods] = useState(initialFoodsContext.publicFoods);
    const [adminFoods, setAdminFoods] = useState(initialFoodsContext.adminFoods);

    const { isLoggedIn } = useContext(UserContext);

    function updatePublicFoods() {
        fetch(SERVER_ADDRESS + '/api/foods', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setPublicFoods(() => data.foods);
                }
            })
            .catch(console.error);
    }

    function updateAdminFoods() {
        fetch(SERVER_ADDRESS + '/api/admin/foods', {
            method: 'GET',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setAdminFoods(() => data.foods);
                }
            })
            .catch(console.error);
    }

    function deletePublicFood(urlSlug) {
        setPublicFoods(currentList => currentList.filter(food => food.url_slug !== urlSlug));
    }

    function deleteAdminFood(urlSlug) {
        setAdminFoods(currentList => currentList.filter(food => food.url_slug !== urlSlug));
    }

    function getPublicFoodByUrlSlug(urlSlug) {
        return publicFoods.find(food => food.url_slug === urlSlug);
    }

    function getAdminFoodByUrlSlug(urlSlug) {
        return adminFoods.find(food => food.url_slug === urlSlug);
    }

    function getAdminFoodById(id) {
        return adminFoods.find(food => food.id === id);
    }

    useEffect(updatePublicFoods, []);

    useEffect(() => {
        if (isLoggedIn) {
            updateAdminFoods();
        } else {
            setAdminFoods(() => initialFoodsContext.adminFoods);
        }
    }, [isLoggedIn]);

    const values = {
        publicFoods,
        adminFoods,
        getPublicFoodByUrlSlug,
        getAdminFoodByUrlSlug,
        getAdminFoodById,
        updatePublicFoods,
        updateAdminFoods,
        deletePublicFood,
        deleteAdminFood,

    };

    return (
        <FoodsContext.Provider value={values}>
            {props.children}
        </FoodsContext.Provider>
    )
}