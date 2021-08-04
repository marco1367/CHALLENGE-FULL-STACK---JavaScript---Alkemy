const {Type} = require('../db');


async function GetTypes(req, res ,next){
    
    try {
        
        const types = await  Type.findAll();
        // console.log(types)
        res.json(types)

    } catch (error) {
        next(error);
    }
}

module.exports={
    GetTypes,
}