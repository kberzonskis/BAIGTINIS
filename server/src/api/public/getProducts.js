import { connection } from "../../db.js";

export async function getPublicProducts(req, res) {
    try {
        const sql = `
            SELECT *, 0 AS productsCount
            FROM products
            WHERE status_id = (
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