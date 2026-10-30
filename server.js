
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Hello! My first Docker application is running.",
        status: "success"
    });
});

app.get("/api/users", (req, res) => {
    res.json([
        { id: 1, name: "Joseph" },
        { id: 2, name: "Alex" }
    ]);
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port http://localhost:3000");
});
