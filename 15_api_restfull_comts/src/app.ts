// ENV variables
require("dotenv").config();

import express from "express";
import config from "config";

// Conectando o app ao express importado acima
const app = express();

// JSON Midleware configuration
app.use(express.json());

// Importando DB via mongoose (definição em db.ts)

import db from "../config/db";

//Importando rotas
import router from "./router";

//Importando a configuração de logs criada via winston
import Logger from "../config/logger";

//Middlewares
// 1 - logs relacionados a requsições e controlado pelo morgan
import morganMiddleware from "./middleware/monganMiddleware";

//Por meio do Middleware, setando os arquivos de log de requisição
app.use(morganMiddleware);

//Atribuindo um prefixo às URLs da API e ligando-as às portas de router
app.use("/api/", router);



// app PORT 
/* Pegando o calor da propriedade port do config e setando como number*/
const port = config.get<number>('port');

// Acionando a porta e ligando-a a uma função assíncrona, que depois se ligará a um BD
app.listen(port, async () => {

    // Tentando conectar ao db
    await db();
    Logger.info("A aplicação está funcionando na porta " + port);
})

