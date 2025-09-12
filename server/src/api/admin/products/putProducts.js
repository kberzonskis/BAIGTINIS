
import { connection } from "../../../db.js";
import { IsValid } from "../../../lib/IsValid.js";

export async function putAdminProducts(req, res) {
  /*  const [errParams, msgParams] = IsValid.fields(req.params, {
        original_url: 'nonEmptyString',
    });

    if (errParams) {
        return res.json({
            status: 'error',
            msg: msgParams,
        });
    }

    const [err, msg] = IsValid.fields(req.body, {
        title: 'nonEmptyString',
        url: 'nonEmptyString',
        duration: 'numberInteger',
        food: 'numberInteger',
        status: 'nonEmptyString',
       
    }, {
        img: 'nonEmptyString',
        description: 'nonEmptyString',
       
    });

    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }
*/
    const { original_url } = req.params;
    const { title, url, status, duration, rating  } = req.body;
    let { food, description, img } = req.body;


    if (food === 0) {
        food = null;
    }
    if (!description) {
        description = '';
    }  
    
  if (!rating) {
        rating = 0;
  }

    if (!img) {
        img = '';
    }

    const imgPath = img.split('/').at(-1);

    try {
        const sql = `
            UPDATE products
            SET img = ?, title = ?, url_slug = ?, food_id = ?, status_id = (
                SELECT id FROM general_status WHERE name = ?
            ),  description = ?, duration_in_minutes = ?, rating = ?
              WHERE url_slug = ?`; 
           

        const [response] = await connection.execute(sql,
            [imgPath, title, url, food, status, description, duration, rating,  original_url]);

        if (response.affectedRows !== 1) {
            return res.status(500).json({
                status: 'error',
                msg: 'Serverio klaida',
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
        msg: 'Sekmingai atnaujintas produktas',
    });
}
