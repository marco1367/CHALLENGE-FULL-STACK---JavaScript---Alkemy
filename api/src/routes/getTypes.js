const { Router } = require('express');
const {GetTypes} = require("../controllers/getTypes");

const router = Router();

router.get('/gettypes', GetTypes);
    
module.exports = router;