import express, { Request, Response } from "express";

const app = express()
const port = 8000

app.use(express.json())

let travelList = [
  {
    "id": 1,
    "name": "Paris",
    "city": "Paris",
    "country": "France",
    "image": "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
    "description": "Paris is known for its iconic landmarks like the Eiffel Tower, art museums like the Louvre, and its romantic atmosphere."
  },
  {
    "id": 2,
    "name": "New York City",
    "city": "New York",
    "country": "USA",
    "image": "https://www.planetware.com/photos-large/USNY/new-york-city-empire-state-building.jpg",
    "description": "New York City is famous for its skyline, Central Park, Times Square, and vibrant cultural life."
  },
]

app.get('/', (req: Request, res: Response) => {
  res.send('Hello !');
})

// Get all travels (app.get) (/travels)
app.get('/travels', (req: Request, res: Response) => {
  res.send(travelList);  
})

// Get One travel (app.get) (/travels/:id)
app.get('/travels/:id', (req: Request, res: Response) => {
  //get param id
  const { id } = req.params;
  //find travel in array with param id
  const travel = travelList.find(t => t.id === Number(id));
  //send travel

  if(!travel) {
    res.status(404).send({message: "Travel not found"})
  }
  res.send(travel);
})

// Create travel (app.post) (/travels)
app.post('/travels', (req: Request, res: Response) => {
  // get data body
  const newTravel = req.body;
  // create id
  const newID = travelList.length + 1;
  newTravel.id = newID;
  // add data body into array
  travelList.push(newTravel)
  // send data created
  res.send(travelList);
})

// Update travel (app.put) (/travels/:id)
app.put('/travels/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedTravel = req.body;

  const travel = travelList.find(t => t.id === Number(id));

  updatedTravel.id = travel?.id;

  const updatedList = travelList.filter(t => t.id !== Number(id));

  travelList = updatedList;
  travelList.push(updatedTravel);

  res.send(travelList);
})

// Delete travel (app.delete) (/travels/:id)
app.delete('/travels/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const travelListFilter = travelList.filter(t => t.id !== Number(id));
  console.log(travelListFilter);
  travelList = travelListFilter;

  // travelList.splice(index, 1)
  res.status(204).send({
    message: "Success to delete element with id : ", id
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
