const express = require("express");
const morgan = require("morgan");
const router = require("./src/router/router");
const handlebars = require('express-handlebars');
const sass = require("node-sass-middleware");

const app = express();

app.engine("handlebars", handlebars.engine({
    helpers: require(`${__dirname}/src/views/helpers/helpers`),
    layoutsDir: `${__dirname}/src/views/layouts`,
    defaultLayout: 'main',
}));
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/src/views`);

app.use(sass({
    src: `${__dirname}/public/scss`,
    dest: `${__dirname}/public/css`,
    outputStyle: "compressed",
    prefix: "/css"
}));

app.use("/css", express.static(`${__dirname}/public/css`));
app.use("/webfonts", express.static(`${__dirname}/node_modules/@fortawesome/fontawesome-free/webfonts`));
app.use("/img", express.static(`${__dirname}/public/img`));
app.use("/js", [
    express.static(`${__dirname}/public/js`),
    express.static(`${__dirname}/node_modules/bootstrap/dist/js/`)
])

const csurf = require("csurf");
const csrfProtection = csurf({cookie: true});
app.use(csrfProtection);

app.use(express.urlencoded({ extended: false}));
app.use(router);
app.use(morgan("combined"));

app.listen(3000);