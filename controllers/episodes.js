import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();


router.get("/", async (request, response) => {
    await fetch("https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad")
    .then(episodesInfo => {
        episodesInfo.json()
        .then(episodesJson => {
            response.render("episodes", {
                data: episodesJson
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