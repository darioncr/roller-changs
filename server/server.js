import express from 'express';
import cors from 'cors';


//SDK DEL MERCADO PAGO 

import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({
    accessToken: 'APP_USR-5490539301427015-031116-e9873e7f153c4d3decffd306dcd1c574-817446033',

});

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {

    res.send("Soy el server:");

});

app.post('/create_preference', async (req, res) => {
    try {
        const { title, quantity, price } = req.body; 

        const body = {
            items: [
                {
                    title: title,
                    quantity: Number(quantity),
                    unit_price: Number(price),
                    currency_id: "MXN",  
                },
            ],
            back_urls: {
                success: `http://localhost:3000/`,
                failure: `http://localhost:3000/`,
                pending: ``,
            },
            auto_return: "approved",
        };

        const preference = new Preference(client);
        const result = await preference.create({ body });

        res.json({
            id: result.id,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error al crear la preferencia :(",
        });
    }
});

app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`);
}); 