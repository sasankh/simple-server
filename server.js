var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// todoitems

var todoitems = [
  {
    id: "23422j",
    title: "clean kitchen"
  },
  {
    id:"asdadsa12",
    title:"kill vicious mole rats"
  },
  {
    id:"asdasd",
    title:"dog meat"
  }
];

app.get('/todo', function(req, res){
  res.send(todoitems);
});

//ingredients

var ingredients = [
  {
    "id": "234kjw",
    "text": "Eggs"
  },
  {
    "id": "as82w",
    "text": "Milk"
  },
  {
    "id": "234sk1",
    "text": "Bacon"
  },
  {
    "id": "ppo3j3",
    "text": "Frog Legs"
  },
  {
    "id":1,
    "text":"ham"
  },
  {
    "id":2,
    "text":"cheese"
  },{
    "id":3,
    "text":"potatoes"
  }
];


app.get('/ingredients', function(req, res) {
  console.log("GET ingredients From SERVER");
  res.send(ingredients);
});

app.post('/ingredients', function(req, res) {
  var ingredient = req.body;
  console.log(req.body);
  ingredients.push(ingredient);
  res.status(200).send("Successfully posted ingredient");
});

//animals

var animals = [
  "puppy",
  "kitten",
  "ferocious bear",
  "penguin"
];

app.get('/animals', function(req, res){
  res.send(animals)
});

app.listen(6060);
