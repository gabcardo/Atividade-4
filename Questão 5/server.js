const http = require('http');
const server = http.createServer((req, res)=>{
    console.log(req.url);
    if (req.url === '/'){
        res.statusCode = 200;
        res.end("Bem vindo ao meu servidor");
    }
    else if(req.url === '/sobre'){
        res.statusCode = 200;
        res.end("Esta é a pagina sobre a aplicação");
    }
    else if(req.url === '/alunos'){
        res.statusCode = 200;
        res.end("Lista de alunos da turma");
    }
    else if(req.url === '/contato'){
        res.statusCode = 200;
        res.end("Entre em contato conosco");
    } else {
        res.statusCode = 404;
        res.end("Página não encontrada");
    }
});
server.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000");
});
