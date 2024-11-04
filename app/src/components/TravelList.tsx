import { useEffect } from "react"
import CardTravel from "./CardTravel"
import { TravelType } from "../types/travel.type"

type TravelListType = {
    fetchTravels: () => void,
    travelList: TravelType[],
}

const TravelList = ({fetchTravels, travelList}: TravelListType) => {

    useEffect(() => {
        fetchTravels()
    }, [])

    
    return ( 
        <div className="grid grid-cols-3 gap-4">
            {travelList.map(travel => <CardTravel travel={travel} key={travel.id} />)}
        </div>
     );
}
 
export default TravelList;