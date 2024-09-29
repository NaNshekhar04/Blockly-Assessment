const getCoordinates = async (req, res)=>{
    
    const startLocation = req.query.startLocation;
    const destination = req.query.destination;
    try{
    
    } catch(err){
        console.log(err);
        res.status(500).json({message: "Failed to get Coordinates"});
    }
}

module.exports = {getCoordinates}