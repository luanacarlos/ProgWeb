const index = (req, res) =>{
    const username = "Luan";
    res.render("main/index", {
        username: username,
        isRyan: username === 'Ryan'
    });
}

const profs = (req, res) =>{
    const profs = [
        {nome: "David Fernandes", sala: 1238},
        {nome: "Horácio Fernandes", sala: 1333},
        {nome: "Tayana Conte", sala: 1234},
        {nome: "Leandro Galvão", sala: 1111}
    ];
    res.render('main/profs', { profs});
}

const about = (req, res) =>{
    res.render("main/about");
}

const ui = (req, res) =>{
    res.render("main/ui");
}

const game = (req, res) =>{
    res.render("main/game");
}

module.exports = {index, profs, about, ui, game};