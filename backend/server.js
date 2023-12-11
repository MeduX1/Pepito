import express from 'express'
import cors from 'cors'
import pool from "./Database.js";
const app = express()

app.use(express.json());

app.use(cors());

app.get('/getMeals', async (req, res) => {
    const { category } = req.query
    console.log(req.query)
    try {
        const { rows } = await pool.query(`SELECT name, price, category FROM Meal WHERE Category='${category}'`)
        res.status(200).send(rows)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

app.listen(5000, () => console.log("Server on localhost:5000"));