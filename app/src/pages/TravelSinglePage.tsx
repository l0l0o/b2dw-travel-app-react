import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TravelDTO } from "../types/travel.type";
import { findOneById, remove } from "../services/travel.services";
import Button from "../components/Button";

const TravelSinglePage = () => {
  const { id } = useParams();
  const [credentials, setCredentials] = useState<TravelDTO>({});  const navigate = useNavigate();

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

  const handleDelete = async () => {
    if (!id) return;

    try {
      await remove(id);
      navigate("/");
    } catch (error) {
      console.log("Success to delete", error);
    }
  };

  return (
    <div>
      <img src={credentials?.image} alt="" />
      <h1>{credentials?.title}</h1>
      <Link to={`/edit/${id}`}>Editer</Link>

      <Button
        text="Delete"
        variant="danger"
        onClick={handleDelete}
      />

    </div>
  );
};

export default TravelSinglePage;
