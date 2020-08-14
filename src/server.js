// DADOS

const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "85999999999",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisar em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Daniele Evangelista",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "85999999999",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisar em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [    
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [    
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


//FUNCIONALIDADES

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

// REQUIRE vai pegar a função EXPRESS, vai chamar "/" e retornar a resposta.
function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res) {
    const data = req.query

    // se isNotEmpty tiver dados
    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {

        data.subject = getSubject(data.subject)
        
        //adicionar dados a lista de proffys
        proffys.push(data)

        // ao entrar na condição, redireciona para study
        return res.redirect("/study")
        
    }

    // se nao, mostrar a página
    return res.render("give-classes.html", {subjects, weekdays})
}


// SERVIDOR

const express = require('express')
const server = express()


//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})

// Inicio e configuração do servidor
server
// configura arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
// start do servidor
.listen(5500) // ira ouvir o server