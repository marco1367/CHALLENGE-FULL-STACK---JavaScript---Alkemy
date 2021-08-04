const { Router } = require("express");
const NewOperation = require("./form/index");
const GetTypes = require("./getTypes");
const GetLastOperations = require("./getLastOperations");
const GetAllOperations = require("./getAllOperations");
const editOperation = require("./editOperation");
const deleteOperation = require("./deleteOperation");

const router = Router();

router.use('/', NewOperation)
router.use('/', GetTypes)
router.use('/', GetLastOperations)
router.use('/', GetAllOperations)
router.use('/', editOperation)
router.use('/', deleteOperation)

module.exports = router;
