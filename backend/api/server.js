import express from 'express';

import { sendEmail } from '../servives/emailsender.js';
const app = express();

app.use(express.json());


app.post('/sendEmail', async function(req, res){
    const email = req.body.userEmail;
    const message = req.body.userMessage;

    if(!email || !message){
        return;
    }

    await sendEmail(email, message);

    res.json({ok:'ok'});
})


app.listen(5000);