const express = require("express");
const router = require("./config/routes");
const handlebars = require('express-handlebars');
const app = express();
const logger = require("morgan");
const PORT = 3000;

app.use(router);
app.engine("handlebars", handlebars.engine({
    helpers: require(`${__dirname}/views/helpers/helpers.js`)
    }));
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);


app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});

const user = {
    checkAuth: (req) => {
        return true;
    }
};


app.use((req, res, next) => {
    if (user.checkAuth(req)) {
        next();
    } else {
        res.statusCode = 403;
        res.end("Não autorizado");
    }
});

app.use(logger("short"));



