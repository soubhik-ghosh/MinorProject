const express = require("express");

const pizza = require('./models/pizzaModel')

const db = require("./db");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Server working on ${port}..🔥`);
});

app.get("/getpizzas",(req,res) => {
  pizza.find({} , (err,docs) => {
    if(err) {
      console.log(err);
    }else{
      res.send(docs)
    }
  })

});

const port = process.env.PORT || 8000;

app.listen(port, () => { 
  console.log(`Server is running on port ${port} 🔥`);
});
