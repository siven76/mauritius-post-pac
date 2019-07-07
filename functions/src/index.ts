import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from "body-parser";

admin.initializeApp(functions.config().firebase);

const app = express();
const main = express();

main.use('/api/v1', app);
main.use(bodyParser.json());

export const webApi = functions.https.onRequest(main);

app.get('/test', (request, response) => {

    response.send('Pellentesque auctor neque nec urna. Fusce risus nisl, viverra et, tempor et, pretium in, sapien.');

})