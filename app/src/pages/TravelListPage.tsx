import { useState } from "react";
import FormAddTravel from "../components/FormAddTravel";
import TravelList from "../components/TravelList";
import { TravelType } from "../types/travel.type";
<<<<<<< HEAD
import { findAll } from "../services/travel.services"

const TravelListPage = () => {
    const [travelList, setTravelList] = useState<TravelType[]>([])

    const fetchTravels = async () => {
        try {
            const travel = await findAll()
        }
    }

    return ( 
        <div className="">
            <h1 className="text-4xl text-red-400 mb-10">Share your travel</h1>
            <FormAddTravel fetchTravels={fetchTravels} />
            <TravelList 
                fetchTravels={fetchTravels}
                travelList={travelList}
            />
        </div>
     );
}
 
export default TravelListPage;
=======
import { findAll } from "../services/travel.service";

const TravelListPage = () => {
  const [travelList, setTravelList] = useState<TravelType[]>([]);

  const fetchTravels = async () => {
    try {
      const travels = await findAll();
      setTravelList(travels);
    } catch (error) {
      console.log("Error to fetch travels", error);
    }
  };

  return (
    <div className="">
      <h1 className="text-4xl text-red-400 mb-10">Share your travel</h1>

      <FormAddTravel fetchTravels={fetchTravels} />

      <TravelList travelList={travelList} fetchTravels={fetchTravels} />
    </div>
  );
};

export default TravelListPage;
>>>>>>> fa883a3c17a6a177fa4aa4711d164d2be37c0274
