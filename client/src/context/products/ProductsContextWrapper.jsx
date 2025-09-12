import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";
import { initialProductsContext } from "./initialProductsContext";
import { UserContext } from "../user/UserContext";
import { SERVER_ADDRESS } from "../../env";

export function ProductsContextWrapper(props) {
    const [publicProducts, setPublicProducts] = useState(initialProductsContext.publicProducts);
    const [adminProducts, setAdminProducts] = useState(initialProductsContext.adminProducts);

    const { isLoggedIn } = useContext(UserContext);

    function updatePublicProducts() {
        fetch(SERVER_ADDRESS + '/api/products', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setPublicProducts(() => data.products);
                }
            })
            .catch(console.error);
    }

    function updateAdminProducts() {
        fetch(SERVER_ADDRESS + '/api/admin/products', {
            method: 'GET',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setAdminProducts(() => data.products);
                }
            })
            .catch(console.error);
    }

    function deletePublicProduct(urlSlug) {
        setPublicProducts(currentList => currentList.filter(products => products.url_slug !== urlSlug));
    }

    function deleteAdminProduct(urlSlug) {
        setAdminProducts(currentList => currentList.filter(products => products.url_slug !== urlSlug));
    }

    function getPublicProductByUrlSlug(urlSlug) {
        return publicProducts.find(products => products.url_slug === urlSlug);
    }

    function getAdminProductByUrlSlug(urlSlug) {
        return adminProducts.find(products => products.url_slug === urlSlug);
    }

    useEffect(updatePublicProducts, []);

    useEffect(() => {
        if (isLoggedIn) {
            updateAdminProducts();
        } else {
            setAdminProducts(() => initialProductsContext.adminProducts);
        }
    }, [isLoggedIn]);

    const values = {
        publicProducts,
        adminProducts,
        getPublicProductByUrlSlug,
        getAdminProductByUrlSlug,
        updatePublicProducts,
        updateAdminProducts,
        deletePublicProduct,
        deleteAdminProduct,
    };

    return (
        <ProductsContext.Provider value={values}>
            {props.children}
        </ProductsContext.Provider>
    )
}