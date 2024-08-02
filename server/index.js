const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

app.get("/", (req, res) => {
    res.send("Welcome to the Schedule API");
});

//create a schedule

app.post("/schedule", async(req,res) => {
    try {
        const { name, start_date, end_date, time  } = req.body;
        const newSchedule = await pool.query("INSERT INTO schedule (name, start_date, end_date, time) VALUES($1, $2, $3, $4) RETURNING *", 
                                         [name, start_date, end_date, time]
        );

        res.json(newSchedule.rows)[0];
    } catch (err) {
        console.error(err.message);
    }
});

//get all schedules

app.get("/schedule", async(req, res) => {
    try {
        const allSchedules = await pool.query("SELECT * FROM schedule");
        res.json(allSchedules.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a schedule

app.get("/schedule/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM schedule WHERE date_id = $1", [id])
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

const PORT = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", function () {
    
});