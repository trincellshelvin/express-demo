import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the Express Server!");
});

app.get("/about", (req, res)=>{
    res.send("This is the about page.")
});

app.post("/data", (req, res)=> {
    res.type("json");
    res.send(`{
        "name": "Courtney",
        "age": 5
        }`)
});

app.listen(3000, () => {
    console.log("Express server initialized");
});
