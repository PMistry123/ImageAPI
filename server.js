const express = require('express');
const app = express();
const path = require('path');
var cors = require('cors')

app.use(cors())

// Define the directory where your images are stored
const imagePath = path.join(__dirname, '/public');

// Serve static files (images)

// var corsOptions = {
//     origin: 'http://localhost:4200',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

//   app.get('/products', cors(corsOptions), function (req, res, next) {
//     res.json({msg: 'This is CORS-enabled for only example.com.'})
//   })

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

//app.use('/images', express.static(imagePath));

//app.use('/images', express.static(path.join(__dirname, '/public')))

app.use(express.static('public'));
app.use('/images', express.static(imagePath));
 





// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});