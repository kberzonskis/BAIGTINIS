import { connection } from "../../../db.js";

export async function getAdminFoods(req, res) {
    try {
        const sql = `
            SELECT foods.*,
            (
                SELECT COUNT(*)
                FROM products
                WHERE food_id = foods.id
            ) AS productsCount,
            general_status.name AS status_name
            FROM foods
            INNER JOIN general_status
                ON foods.status_id = general_status.id;`;
        const [foods] = await connection.execute(sql);

        return res.json({
            status: 'success',
            foods,
        });
    } catch (error) {
        return res.json({
            status: 'error',
            foods: [],
        });
    }
}