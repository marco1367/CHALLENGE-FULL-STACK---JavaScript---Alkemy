const {Operation} = require('../db');


async function PostNewOperation(req, res ,next){
    const { concept, amount, date, id_type } = req.body;
    try {

        if( (concept==="" || concept===undefined) || (amount==="" || amount===undefined) || (date==="" || date===undefined) || (id_type==="" || id_type===undefined) ){
            return res.status(200).json( {message: "All fields are required"} );
        }
        if( typeof(concept)!=="string" || typeof(amount)!=="number" || typeof(date)!=="string" || typeof(id_type)!=="number" ){
            return res.status(200).json( { message: "incorrect data type/s" } )
        }

        const operation = await Operation.findOrCreate({
            where: { 
                concept: concept.toLowerCase(),
                amount: amount,
                date: date,
                typeIdType: id_type
            }
        })

        if (operation[1]===true) {
            return res.status(200).json({message:'Operation registered successfully.'})
        }else{
            return res.status(200).json({message:'This operation has already been registered.'})
        }

    } catch (error) {
        next(error);
    }
}

module.exports={
    PostNewOperation,
}