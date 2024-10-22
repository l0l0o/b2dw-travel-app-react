import { useEffect, useState } from "react"
import { TravelType } from "../types/travel.type"
import CardTravel from "./CardTravel"

const TravelList = () => {
    const [travelList, setTravelList] = useState<TravelType[]>([])

    useEffect(() => {
        fetchTravels()
    }, [])

    const fetchTravels = async () => {
        const response = await fetch("http://localhost:8000/travels")
        const data = await response.json()
        setTravelList(data)
    }
    
    return ( 
        <div className="grid grid-cols-3 gap-4">
            {travelList.map(travel => <CardTravel travel={travel} key={travel.id} />)}
        </div>
     );
}
 
export default TravelList;