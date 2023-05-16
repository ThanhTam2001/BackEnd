const express = require('express');
const {PerPage} = require('../../controllers/PerPage')
const PerPageRouter =express.Router();

PerPageRouter.get("/perpage/:id", PerPage)

module.exports = PerPageRouter;