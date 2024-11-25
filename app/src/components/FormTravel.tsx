import { useEffect, useState } from "react";
import { TravelDTO } from "../types/travel.type";
import { create, findOneById, update } from "../services/travel.services";
import { useParams } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

type FormTravelProps = {
  fetchTravels?: () => void;
};

const FormTravel = ({ fetchTravels }: FormTravelProps) => {
  const [credentials, setCredentials] = useState<TravelDTO>({
    title: "",
    city: "",
    country: "",
    image: "",
    description: "",
  });

  const { id } = useParams();

  useEffect(() => {
    if (id) fetchTravel();
  }, []);

  const fetchTravel = async () => {
    try {
      const travel = await findOneById(id as string);
      setCredentials(travel);
    } catch (error) {
      console.log("Error to fetch travels", error);
    }
  };

  const handleChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit form", credentials);

    try {
      if(id) {
        await update(id, credentials);
      } else {
          await create(credentials);
        }
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2 mb-5 w-4/12">
        <Input
          type="text"
          name="title"
          value={credentials.title}
          placeholder="Entrez un nom"
          onChange={handleChange}
          required = {true}
        />

        <Input
          type="text"
          name="city"
          value={credentials.city}
          placeholder="Entrez une ville"
          onChange={handleChange}
          required = {false}
        />
        <Input
          type="text"
          name="country"
          value={credentials.country}
          placeholder="Entrez un pays"
          onChange={handleChange}
          required = {false}
        />
        <Input
          type="text"
          name="image"
          value={credentials.image}
          placeholder="Entrez une image"
          onChange={handleChange}
          required = {false}
        />
        <Input
          type="text"
          name="description"
          value={credentials.description}
          placeholder="Entrez une description"
          onChange={handleChange}
          required = {false}
        />

        <Button 
          type="submit"
          text={`${id ? "Éditer" : "Ajouter"}`}
        />
      </div>
    </form>
  );
};

export default FormTravel;
