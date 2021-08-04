const { Router } = require('express');
const {DeletOperation} = require("../controllers/deletOperation");

const router = Router();

router.delete('/deleteoperation/:id_operation', DeletOperation);
    
module.exports = router;