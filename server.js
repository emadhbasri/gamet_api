const express = require("express");
// const swagger = require('./swagger')
const bodyParser = require('body-parser');
const cors = require("cors");
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose')
const app = express();
const server = require('http').createServer(app);
const config = require('./lib/core/config')

// const server    =
//     require('https').createServer({
//         key: fs.readFileSync( __dirname +'/ssl/priv.key'),
//         cert: fs.readFileSync( __dirname +'/ssl/cert.pem'),
//         //     key: fs.readFileSync( __dirname +'/ssl/priv.key'),
//         // cert: fs.readFileSync( __dirname +'/ssl/chain.cer'),
//         // ca :fs.readFileSync( __dirname +'/ssl/ca.cer')
//     }, app)

app.use(cors());
app.use(express.static("public"));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true,limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(morgan('combined'));
app.use(helmet());




mongoose.connect(config.DB_URL);
mongoose.connection.on('error', function (error) {
    console.error('Error in MongoDb connection: ' + error);
});
mongoose.connection.on('connected', function () {
    console.log('MongoDB connected!');
});
mongoose.connection.on('reconnected', function () {
    console.log('MongoDB reconnected!');
});
mongoose.connection.on('disconnected', function () {
    console.log('MongoDB disconnected!');
});



app.get("/", (req, res) => {
    res.send(`listening on port ${config.port} :)`);
});

app.use("/consule", require('./lib/consule/rout_consule'));
app.use("/game", require('./lib/game/rout_game'));
app.use("/gamenet", require('./lib/gamenet/rout_gamenet'));
app.use("/user", require('./lib/user/rout_user'));
app.use("/userplus", require('./lib/userplus/rout_userplus'));
app.use("/home", require('./lib/features/rout_home'));

// swagger(app)


server.listen(config.port, () => {
    console.log(`listening on port ${config.port}`);
});