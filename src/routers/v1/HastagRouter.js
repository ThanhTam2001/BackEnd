const express = require('express');
const {userHastag,sttHastag, grHastag, showGrHastag} = require('../../controllers/HasTag')
const HastagRouter =express.Router();

HastagRouter.post("/userhastag", userHastag)
HastagRouter.post("/stthastag", sttHastag)
HastagRouter.post("/grhastag", grHastag)
HastagRouter.get("/showgrhastag", showGrHastag)

module.exports = HastagRouter;