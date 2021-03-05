const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('./models/home')
const Home = mongoose.model('Home')

require('./models/orcamento')
const Orcamento = mongoose.model('Orcamento')

const app = express()

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
  app.use(cors());
  next();
});


mongoose.connect('mongodb://localhost:27017/imersaoreact', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  console.log('Conexão com MongoDb realizada com sucesso!');
}).catch((err) => {
  console.log("Erro: A conexão com MongoDb falhou");
})

app.get('/home', async (req, res) =>{
    await Home.findOne({}).then((home) => {
      return res.json({
        error: false,
        home
      });
    }).catch((err) => {
      return res.status(400).json({
        error: true,
        message: "Nenhum registro encontrado!"
      });
    });
  });

  app.post('/home', async (req, res) => {
    const dados = {
      "topTitulo": "Temos a solucao que a sua empresa precisa!",
      "topSubtitulo": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.It uses utility classes for typography and spacing to space content out within the larger container.",
      "TextoBtn":"Orçamento",
      "topLinkBtn": "http://localhost:3000/orcamento",
      "serTitulo": "Serviços",
      "serSubtitulo": "Nullam ac enim et nisl interdum tempor ac non nulla.",
      "serUmIcone": "laptop-code",
      "serUmTitulo":"Serviço um",
      "serUmDesc": "Nullam ac enim et nisl interdum tempor ac non nulla.",
      "serDoisIcone": "mobile-alt",
      "serDoisTitulo":"Serviço dois",
      "serDoisDesc": "Nullam ac enim et nisl interdum tempor ac non nulla.",
      "serTresIcone": "network-wired",
      "serTresTitulo": "Serviço tres",
      "serTresDesc": "Nullam ac enim et nisl interdum tempor ac non nulla."
    }
    const homeExiste = await Home.findOne({});
    if(homeExiste) {
      return res.status(400).json({
        error: true,
        message: "Erro: A pagina home ja possui um registro no BD!"
      });
    }
    await Home.create(dados), (err) => {
      if(err)return res.status(400).json({
        error: true,
        message: "Erro: conteudo da pagina home nao cadastrado com sucesso!"
      })
    };
    return res.json({
      error: false,
      message: "Conteudo da pagina home cadastrado com sucesso!"
    })
  });

  app.post('/orcamento', async (req, res) => {

    await Orcamento.create(req.body, (err) => {
      if(err) return res.status(400).json({
        error: true,
        message: "Erro: Solicitacao de orcamento não enviada!"
      });
    });

    return res.json({
      error: false,
      message: "Solicitacao de orcamento enviada com sucesso!"
    });
  });
app.listen(8080, function(){
    console.log('Servidor iniciado na porta 8080: http://localhost:8080')
});
