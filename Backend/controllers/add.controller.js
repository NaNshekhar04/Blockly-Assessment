const prisma = require("../lib/prisma-client")

const addCoordinates = async (req, res) =>{
    const data = req.body;
    const latitude = data.latitude;
    const longitude = data.longitude;
    const date = data.date;

    try{
        const newCoordinates = await prisma.vehicleCoordinates.create({
            data:{
                latitude,
                longitude,
                date: new Date(date)
            }
        })

        res.status(200).json(newCoordinates);
    } catch(err){
        console.log(err);
        res.status(500).json({message: "Error while adding coordinates to database"})
    }
}

module.exports = {addCoordinates}