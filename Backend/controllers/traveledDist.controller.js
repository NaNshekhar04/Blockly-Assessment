const prisma = require("../lib/prisma-client");

const track = async (req, res) =>{
    const date =  new Date(req.url.split("=")[1]);
    let traveledDistance = 0;

    try{
        const traveledPath = await prisma.vehicleCoordinates.findMany({
            where:{
                date: {
                    gte: new Date(date.setUTCHours(0, 0, 0, 0)),
                    lt: new Date(date.setUTCHours(23, 59, 59, 999))
                }
            }
        })
        const toRadians = (degree) => degree * (Math.PI / 180);
        for(let i=1; i<traveledPath.length; i++){
            let lat1 = toRadians(traveledPath[i-1].latitude);
            let lng1 = toRadians(traveledPath[i-1].longitude);
            let lat2 = toRadians(traveledPath[i].latitude);
            let lng2 = toRadians(traveledPath[i].longitude);

            const dlat = lat2-lat1;
            const dlng = lng2-lng1;

            const a = Math.sin(dlat / 2)**2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlng / 2)**2
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

            const r = 6371;
            traveledDistance+=r*c;
        }

        res.status(200).json(traveledDistance);
    } catch(err){
        console.log(err);
        res.status(500).json({message: "Error while retreiving data"});
    }
}

module.exports = {track};