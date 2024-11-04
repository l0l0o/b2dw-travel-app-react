import React, { useState } from "react";
import { TravelDTO } from "../types/travel.type";

type FormAddTravelType = {
    fetchTravels: () => {},
}

const FormAddTravel = ({fetchTravels}: FormAddTravelType) => {

    const [newTravel, setNewTravel] = useState<TravelDTO>({
        name: "",
        city: "",
        country: "",
        image: "",
        description: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTravel({
          ...newTravel,
          [e.target.name]: e.target.value
        });
      };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch(`${import.meta.env.VITE_API_URL}/travels`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newTravel)
        })
        fetchTravels();
        setNewTravel({
            ...newTravel,
            name: "",
            city: "",
            country: "",
            image: "",
            description: ""
        })
      }

    return ( 
        <div className="mb-2">
            <h4 className="mb-2">Ajouter une nouvelle destination</h4>
            <form onSubmit={handleSubmit} className="" action="">
                <div className="flex flex-col">
                    <label htmlFor="">name</label>
                    <input onChange={handleChange} name="name" value={newTravel.name} className="border-2 border-slate-100" type="text" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="">city</label>
                    <input onChange={handleChange} name="city" value={newTravel.city} className="border-2 border-slate-100" type="text" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="">country</label>
                    <input onChange={handleChange} name="country" value={newTravel.country} className="border-2 border-slate-100" type="text" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="">image (url)</label>
                    <input onChange={handleChange} name="image" value={newTravel.image} className="border-2 border-slate-100" type="text" />
                </div>
                
                <div className="flex flex-col">
                    <label htmlFor="">description</label>
                    <input onChange={handleChange} name="description" value={newTravel.description} className="border-2 border-slate-100" type="text" />
                </div>
                <input className="mt-2 p-2 bg-red-400 text-white rounded-md" type="submit" />
            </form>
        </div>
     );
}
 
export default FormAddTravel;