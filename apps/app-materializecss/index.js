//=============================================================================
const appPort = 3001;
const express = require("express");
var path = require("path");
const app = express();
//=============================================================================

// https://codeforgeek.com/2015/01/render-html-file-expressjs/
app.get("/", function (req, res, next) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get("/index2.html", function (req, res, next) {
    res.sendFile(path.join(__dirname + '/index2.html'));
});

app.get("/social.html", function (req, res, next) {
    res.sendFile(path.join(__dirname + '/social.html'));
});
app.get("/examples/:example", function (req, res, next) {
    res.sendFile(path.join(__dirname + '/examples/' + req.params.example));
});
//=============================================================================
// statics
app.use('/js', express.static('./js'));
app.use('/css', express.static('./css'));
app.use("/fonts", express.static("./fonts"));
app.use("/images", express.static("./images"));
app.use("/notes", express.static("./notes"));
//=============================================================================
app.listen(appPort, function () {
    console.log("app-materializecss started on ." + appPort);
    console.log("http://localhost:" + appPort);
});
//=============================================================================