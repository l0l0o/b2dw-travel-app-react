import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TravelDTO } from "../types/travel.type.ts";

const TravelSinglePage = () => {
    const { id } = useParams()
    const [travel, setTravel] = useState<TravelDTO>({})
    const navigate = useNavigate()

    useEffect(() => {
        fetchTravels()
    }, [])

    const fetchTravels = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/travels/${id}`, {
            method: "GET", // GET, POST, PUT, DELETE...
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json()
        setTravel(data)
    }

    const handleDelete = async () => {
        try {
            await fetch(`${import.meta.env.VITE_API_URL}/travels/${id}`, {
               method: "DELETE",
               headers: {
                   "Content-Type": "application/json"
               }})
            navigate("/")
        } catch (error) {
            console.log('Success to delete', error)
        }
        
    }

    return ( 
        <div>
            <img src={travel?.image} alt="" />
            <h1>{travel?.name}</h1>
            <button onClick={handleDelete} className="p-2 bg-red-400 text-white rounded-sm hover:bg-red-500 transition-all">Delete</button>
        </div>
     );
}
 
export default TravelSinglePage;