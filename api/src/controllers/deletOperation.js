const { Operation } = require('../db');


async function DeletOperation(req, res ,next){
    
    const {id_operation} = req.params
    console.log(id_operation);

    try {

        if (!id_operation || id_operation==="" || id_operation==="undefined" || id_operation===undefined) {
            res.status(200).json({message:"an operation id is required"})
        }
        
        const operation = await Operation.findOne({
            where:{
                id_operation: id_operation,
            }
        })

        if (operation) {

            operation.destroy();

            res.status(200).json({message:"the operation was successfully removed from your records"})
        }else{
            res.status(200).json({message:"the operation does not exist"})
        }

    } catch (error) {
        next(error);
    }
}

module.exports={
    DeletOperation,
}