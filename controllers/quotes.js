import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();


router.get("/", async (request, response) => {
    await fetch("https://www.breakingbadapi.com/api/quotes?series=Breaking+Bad")
    .then(quotesInfo => {
        quotesInfo.json()
        .then(quotesJson => {
            response.render("quotes", {
                data: quotesJson
            });
        })
        .catch(err => {
            console.log(err);
        })
    })
    .catch(err => {
        console.log(err);
    })
})
export default router;