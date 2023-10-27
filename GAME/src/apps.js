const express = require("express");
const app = express();
const logger = require("morgan");
const PORT = 3000;

const user = {
    checkAuth: (req) => {
        return true;
    }
};

app.use((req, res, next) => {
    console.log(`Requisição ${req.method} ${req.url}`);
    next();
});

app.use((req, res, next) => {
    if (user.checkAuth(req)) {
        next();
    } else {
        res.statusCode = 403;
        res.end("Não autorizado");
    }
});

app.use(logger("short"));

app.use((req, res) => {
    res.send("Hello world!");
});

app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});

