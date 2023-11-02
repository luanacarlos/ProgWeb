const express = require("express");
const morgan = require("morgan");
const router = require("./src/router/router");
const handlebars = require('express-handlebars');
const sass = require("node-sass-middleware");
const session =  require('express-session');
const bp = require('body-parser')

const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get("/cookie", (req, res)=>{
    if(!("usuario" in req.cookies)){
        res.cookie('usuario', '1234')
        res.send("Usuario nao identificado. Criando Cookie agora!");
    }
    else{
        res.send(`Usuario nao identificado. Id ${req.cookies['usuario']}`);
    }

})

// app.get("/apagar-cookie", (req, res) =>{
//     res.clearCookie("usuario");
//     res.send("cookie apagado");
// })


app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.engine("handlebars", handlebars.engine({
    helpers: require(`${__dirname}/src/views/helpers/helpers`),
    layoutsDir: `${__dirname}/src/views/layouts`,
    defaultLayout: 'main',
}));
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/src/views`);
app.use("/img", express.static(`${__dirname}/public/img`))

app.use(sass({
    src: __dirname + '/public/scss',
    dest: __dirname + '/public/css',
    outputStyle: 'compressed',
    prefix: '/css',
    }));
app.use("/webfonts", express.static(`${__dirname}/node_modules/@fortawesome/fontawesome-free/webfonts`))
    
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', [
    express.static(__dirname+'/node_modules/jquery/dist/'),
    express.static(__dirname+'/node_modules/popper.js/dist/umd/'),
    express.static(__dirname+'/node_modules/bootstrap/dist/js/'),
    express.static(__dirname+'/public/js/')
    ]);
    
const csurf = require("csurf");
const csrfProtection = csurf({cookie: true});
app.use(csrfProtection);
    

app.use(router); // informando as rotas

app.use(morgan("combined"));

app.listen(3000);