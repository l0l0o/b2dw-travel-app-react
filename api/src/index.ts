import express, { Request, Response } from "express";
import cors from "cors"

const app = express()
const port = 8000

app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173'
}))

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
  // get param id
  const { id } = req.params 
  // Find travel into array with param id
  const travel = travelList.find(t => t.id === Number(id))
  console.log(travel)
  // send travel

  if(!travel){
    res.status(404).send({
      message: "Travel not found"
    })
  }

  res.send(travel);
})

// Create travel (app.post) (/travels)
app.post('/travels', (req: Request, res: Response) => {
  // Get data body
  const travel = req.body
  // Create id
  const newId = travelList.length + 1
  // Add data body into array
  travel.id = newId
  travelList.push(travel)
  // Send data created
  res.send(travel);
})

// Update travel (app.put) (/travels/:id)
app.put('/travels/:id', (req: Request, res: Response) => {
  const { id } = req.params
  const updateTravelData = req.body

  const index = travelList.findIndex(t => t.id === Number(id));

  travelList[index] = {
    ...travelList[index],
    ...updateTravelData
  }

  res.send(travelList[index]);
})

// Delete travel (app.delete) (/travels/:id)
app.delete('/travels/:id', (req: Request, res: Response) => {
  const { id } = req.params

  const index = travelList.findIndex(t => t.id === Number(id));
  console.log('index :' , index)

  if(index === -1){
    res.status(404).send({message: `Error travel with id ${id} not found`})
  }
  
  travelList.splice(index, 1); // Supprime l'élément à l'index trouvé
  
  res.status(204).send({message: "Success to delete"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
