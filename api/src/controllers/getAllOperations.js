const {Type, Operation} = require('../db');


async function GetAllOperations(req, res ,next){

    
    try {
        const idType = parseInt(req.query.idType);

        if (!idType || idType==="") {
            
            const array_operations = await Operation.findAll({
               include: Type,
               order:[
                   ["id_operation", "ASC"]
               ]
            });
    
            const reverse_array_operations = array_operations.reverse();
    
            return res.status(200).json(reverse_array_operations);
        }else{
            
            if ( idType!==1 && idType!==2 ) {
                return res.status(200).json({message:"This type not exist"});
            }

            const array_operations = await Operation.findAll({
                where:{
                    typeIdType: idType
                },
                include: Type,
                order:[
                    ["id_operation", "ASC"]
                ]
             });

             const reverse_array_operations = array_operations.reverse();
    
            return res.status(200).json(reverse_array_operations);

        }

    } catch (error) {
        next(error);
    }
}

module.exports={
    GetAllOperations,
}