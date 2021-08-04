const { Router } = require('express');
// const {Country, Activity} = require('../db');
const {PostNewOperation} = require("../../controllers/operation");

const router = Router();

router.post('/newoperation', PostNewOperation);
    
module.exports = router;