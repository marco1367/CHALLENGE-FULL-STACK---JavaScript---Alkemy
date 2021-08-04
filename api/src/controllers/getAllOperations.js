const {Type, Operation} = require('../db');


async function GetAllOperations(req, res ,next){
    
    try {
        
        const array_operations = await Operation.findAll({
           include: Type,
           order:[
               ["id_operation", "ASC"]
           ]
        });

        const reverse_array_operations = array_operations.reverse();

        res.status(200).json(reverse_array_operations);

    } catch (error) {
        next(error);
    }
}

module.exports={
    GetAllOperations,
}