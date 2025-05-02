import express from "express";
import { configDotenv } from "dotenv";



const PORT = 5000;

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => {
    console.log(`Connected ${PORT}`);
})