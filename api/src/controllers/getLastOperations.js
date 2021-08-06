const {Type, Operation} = require('../db');


async function GetLastOperations(req, res ,next){
    
    try {
        
        const array_operations = await Operation.findAll({
           include: Type,
           order:[
               ["id_operation", "ASC"]
           ]
        });

        const end = array_operations.length;
        if (end>=10) {
            
            const start = end - 10;
            const operations = array_operations.slice(start,end); 
    
            return res.status(200).json(operations.reverse());
        }else{
            const operations = array_operations.slice(0,end); 
    
            return res.status(200).json(operations.reverse());
        }


    } catch (error) {
        next(error);
    }
}

module.exports={
    GetLastOperations,
}