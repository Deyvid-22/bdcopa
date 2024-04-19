import express from "express"
import SelacaoController from "./app/controllers/SelacaoController.js"
const app = express()

app.use(express.json())

//pegar seleção por id
function buscarSelacaoId(id){
    return selecoes.filter(selecao => selecao.id == id)
}

//pegar a posição do objeto
function buscarIndexSelacao(id){
    return selecoes.findIndex(selecao => selecao.id == id)
}
//Rotas
app.get("/selecoes", SelacaoController.index)

app.get("/selecoes/:id",SelacaoController.show)

app.post("/selecoes",SelacaoController.store)

app.put("/selecoes/:id",SelacaoController.update)

app.delete("/selecoes/:id", SelacaoController.delete)


export default app
