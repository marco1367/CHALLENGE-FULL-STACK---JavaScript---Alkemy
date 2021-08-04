const { Router } = require('express');
const {GetAllOperations} = require("../controllers/getAllOperations");

const router = Router();

router.get('/alloperations', GetAllOperations);
    
module.exports = router;