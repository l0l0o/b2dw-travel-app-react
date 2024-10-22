import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TravelType } from "../types/travel.type";

const TravelSinglePage = () => {
    const { id } = useParams()
    const [travel, setTravel] = useState<TravelType>({})

    useEffect(() => {
        fetchTravels()
    }, [])

    const fetchTravels = async () => {
<<<<<<< HEAD
        const response = await fetch("http://localhost:5173/travels.json")
        const data = await response.json()
        const travelFilter = data.filter((t: TravelType) => t.id === Number(id))
        setTravel(travelFilter[0])
=======
        const response = await fetch(`http://localhost:8000/travels/${id}`, {
            method: "GET", // GET, POST, PUT, DELETE...
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await response.json()
        setTravel(data)
>>>>>>> 656c6e6 (feat: api)
    }

    return ( 
        <div>
            <img src={travel?.image} alt="" />
            <h1>{travel?.name}</h1>
<<<<<<< HEAD
=======

            <button>Delete</button>
>>>>>>> 656c6e6 (feat: api)
        </div>
     );
}
 
export default TravelSinglePage;