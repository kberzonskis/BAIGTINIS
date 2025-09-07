import { connection } from "../../../db.js";

export async function getAdminProducts(req, res) {
    try {
        const sql = `
            SELECT products.*, general_status.name AS status_name
            FROM products
            INNER JOIN general_status
                ON products.status_id = general_status.id;`;
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