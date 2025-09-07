import { connection } from "../../db.js";

export async function getPublicProducts(req, res) {
    try {
        const sql = `
            SELECT products.*
            FROM products
            INNER JOIN foods
                ON products.food_id = foods.id
            WHERE products.status_id = (
                SELECT id FROM general_status WHERE name = "published"
            ) AND foods.status_id = (
                SELECT id FROM general_status WHERE name = "published"
            );`;
        const [products] = await connection.execute(sql);

        return res.json({
            status: 'success',
            products,
        });
    } catch (error) {
        return res.json({
            status: 'error',
            products: [],
        });
    }
}