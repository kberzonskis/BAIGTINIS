import { connection } from "../../db.js";

export async function getPublicFoods(req, res) {
    try {
        const sql = `
            SELECT *,
            (
                SELECT COUNT(*)
                FROM products
                WHERE food_id = foods.id AND status_id = (
                    SELECT id FROM general_status WHERE name = "published"
                )
            ) AS productsCount
            FROM foods
            WHERE status_id = (
                SELECT id FROM general_status WHERE name = "published"
            );`;
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