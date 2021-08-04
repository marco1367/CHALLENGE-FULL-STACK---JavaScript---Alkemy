const { Router } = require('express');
const {GetLastOperations} = require("../controllers/getLastOperations");

const router = Router();

router.get('/lastoperations', GetLastOperations);
    
module.exports = router;