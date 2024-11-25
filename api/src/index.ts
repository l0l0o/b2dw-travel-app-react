import express, { Request, Response } from "express";
import cors from "cors"
import connection from "./config/database.config";
import CommentController from "./comment/comment.controller";
import TravelController from "./travel/travel.controller";

const app = express()
const port = 8000

app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173'
}))

app.use("/comments", CommentController);

app.use("/travels", TravelController)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello !');
})

app.get('/categories', (req, res)=>{
  const query = "SELECT * FROM category";

  connection.query(query, function (error, results) {
    if (error) {
      res.status(500).send({error: "Error while fetching data"});
      return;
    }
    res.status(200).send(results);
  })})

app.get('/categories/:id', (req, res)=>{
  const query = "SELECT * FROM category WHERE id = ?";
  const {id} = req.params;

  connection.query(query, [id], function (error, results) {
    if (error) {
      res.status(500).send({error: "Error while fetching data"});
      return;
    }
    if (Array.isArray(results) && results.length === 0) {
      res.status(404).send({ error: "Travel not found"});
      return;
    }
    res.status(200).send(results);
  })
})

app.post('/categories', (req, res)=>{
  const { name, description } = req.body;
  const query = `INSERT INTO category (name, description) VALUES (?, ?)`;
  const values = [name, description];

  connection.query(query, values, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
})

app.put('/categories/:id', (req, res)=>{
  const { id } = req.params;

  console.log("end point update (id): ", id);
  console.log("end point update (body): ", req.body);

  connection.query(
    "SELECT * FROM category WHERE id = ?",
    [id],
    (error, results) => {
      console.log("results: ", results);
      console.log("error: ", error);
      if (error) {
        console.log("error: ", error);
        res.status(500).send({ error: "Error while fetching data" });
        return;
      }
      if (Array.isArray(results) && results.length === 0) {
        res.status(404).send({ error: "Category not found" });
        return;
      }

      if (Array.isArray(results) && results.length === 1) {
        const currentCategory = results[0];
        const newCategory = {
          ...currentCategory,
          ...req.body,
        };

        // UPDATE REQUEST with newCategory params
        const sqlUpdate = 
          "UPDATE category SET name = ?, description = ? WHERE id = ?";
        const values = [
          newCategory.name,
          newCategory.description,
          id,
        ];
        connection.query(sqlUpdate, values, (error, result) => {
          if (error) {
            res.status(500).send({error: "Error while fetching data"})
            return;
          }
          res.status(200).send({message: "Travel successfully updated !"})
        })

        console.log("newTravel: ", newCategory);
      }
    }
  );
})

app.delete('/categories/:id', (req, res)=>{
  const { id } = req.params;
  const query = `DELETE FROM category WHERE id = ?`;
  const exist = `SELECT * FROM category WHERE id = ?`;
  const values = [id];

  connection.query(exist, values, function (error, results) {
    if (error) {
      res.status(500).send({ error: "Error while fetching data"});
      return;
    }

    if (Array.isArray(results) && results.length === 0) {
      res.status(404).send({ error: "Travel not found"});
      return;
    }
  })

  connection.query(query, values, function (error, results) {
    if (error) {
      res.status(500).send({ error: "Error while fetching data" });
      return;
    };

    res.status(204).send({message: "Travel successfully deleted !"});
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
