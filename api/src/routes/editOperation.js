const { Router } = require('express');
const {UpdateOperation} = require("../controllers/editOperation");

const router = Router();

router.put('/editoperation', UpdateOperation);
    
module.exports = router;