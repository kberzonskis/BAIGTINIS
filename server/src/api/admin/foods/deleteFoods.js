import { connection } from "../../../db.js";
import { IsValid } from "../../../lib/IsValid.js";

export async function deleteAdminFoods(req, res) {
  /*  const [err, msg] = IsValid.fields(req.params, {
        url: 'nonEmptyString',
    });

    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }
*/
    const { url } = req.params;

    try {
        const sql = `DELETE FROM foods WHERE url_slug = ?;`;
        const [response] = await connection.execute(sql, [url]);

        if (response.affectedRows === 0) {
            return res.status(400).json({
                status: 'error',
                msg: 'Tokia "foods" kortele neegzistuoja',
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida',
        });
    }

    return res.status(200).json({
        status: 'success',
        msg: 'Foods kategorija istrinta sekmingai',
    });
}





