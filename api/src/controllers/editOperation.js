const {Type, Operation} = require('../db');


async function UpdateOperation(req, res ,next){

    const {id_operation, concept, amount, date} = req.body;
    
    try {
        
        if ( (!concept || concept==="") && (!amount || amount==="") && (!date || date==="") ) {
            return res.status(200).json({message:"minimum of one field is required to make a change"});
        }

        const operation = await Operation.findAll({
            where: {
                id_operation: id_operation,
            }
        })


        if (operation.length>0) {

            const parameters = {};

            if (concept && concept!=="" ) {
                parameters.concept = concept;
            }
            if (amount && amount!=="") {
                parameters.amount = amount;
            }
            if (date && date!=="") {
                parameters.date = date;
            }

            await Operation.update(parameters, {
                where: {
                    id_operation: id_operation,
                },
            });
            
            return res.status(200).json({message:"The corresponding changes were made. You can view it in your list of operations."});
        }else{
            return res.status(200).json({message:"this operation does not exist"});
        }


    } catch (error) {
        next(error);
    }
}

module.exports={
    UpdateOperation,
}