require("babel-core/register")({
    presets: ["es2015", "react"]
});

let express = require("express");
let bodyParser = require("body-parser");

let port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
let ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0";

let app = express();

app.set("view engine", "ejs");

app.use(express.static("dist"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", handleRender);

app.listen(port, ip);
console.log("Listening on " + ip + ":" + port);

function handleRender(req, res) {

  res.send(renderFullPage(html, preloadedState));

}