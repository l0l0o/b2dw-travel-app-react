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
        const response = await fetch(`http://localhost:8000/travels/${id}`, {
            method: "GET", // GET, POST, PUT, DELETE...
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await response.json()
        setTravel(data)
    }

    const handleDelete = () => {
        console.log("Delete")
    }

    return ( 
        <div>
            <img src={travel?.image} alt="" />
            <h1>{travel?.name}</h1>

            <button onClick={handleDelete}>Delete</button>
        </div>
     );
}
 
export default TravelSinglePage;