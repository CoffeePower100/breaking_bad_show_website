import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.get("/", async (request, response) => {
    await fetch("https://www.breakingbadapi.com/api/characters")
    .then(charactersInfo => {
        charactersInfo.json()
        .then(charactersJson => {
            response.render("characters", {
                data: charactersJson
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

router.get("/:characterId", async (request, response) => {
    let chosenCharacterId = request.params.characterId
    await fetch(`https://www.breakingbadapi.com/api/characters/${chosenCharacterId}`)
    .then(characterInfo => {
        characterInfo.json()
        .then(characterJson => {
            response.render("a_character_details", {
                data: characterJson
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