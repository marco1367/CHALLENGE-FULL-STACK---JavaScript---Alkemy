const { Router } = require('express');
const {UpdateOperation} = require("../controllers/editOperation");

const router = Router();

router.post('/editoperation', UpdateOperation);
    
module.exports = router;