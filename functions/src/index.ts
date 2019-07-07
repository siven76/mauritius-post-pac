import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from "body-parser";

admin.initializeApp(functions.config().firebase);

const app = express();
const main = express();
const db = admin.firestore();

main.use('/api/v1', app);
main.use(bodyParser.json());

export const webApi = functions.https.onRequest(main);

app.get('/test', (request, response) => {

    response.send('Mauritius Post - PAC API');

});

app.get('/country/:country/zone', async (request, response) => {
    try {
        const country = request.params.country;

        if (!country) throw new Error('Country name is required');

        const zoneCountrySnapshot = await db.collection("zone_contries")
            .where("country", "==", country)
            .get();

        const results: any[] | { id: string; data: FirebaseFirestore.DocumentData; }[] = [];

        zoneCountrySnapshot.forEach(
            (doc) => {
                results.push({
                    id: doc.id,
                    data: doc.data()
                })
            }
        );

        response.json(results);

    } catch (error) {

        response.status(500).send(error);

    }
});