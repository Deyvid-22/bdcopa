import conexao from "../dataBase/conexao.js"

class SelecaoController {

     index (req,res) {
        const sql = "SELECT * FROM selecoes;"
        conexao.query(sql, async (error, resultado)=>{
          try{
              res.status(200).json(resultado)
        }catch{
              res.status(404).json({"erro":error})
          }
        })
    }

     show(req,res){
        const id = req.params.id
          const sql = "SELECT * FROM selecoes WHERE id=?;"
          conexao.query(sql, id, async (error,resultado)=>{
            try{
                res.status(200).json(resultado[0])
          }catch{
                res.status(404).json({"erro":error})
            }
          })
      }
     
     store(req,res){
        const selecao = req.body
        const sql = "INSERT INTO selecoes SET ?;"
        conexao.query(sql,selecao, async (error,resultado)=>{
          try{
              res.status(201).json(resultado)
        }catch{
              res.status(404).json({"erro":error})
          }
        })
    }

     update(req,res){
        const id = req.params.id
        const selecao = req.body
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        conexao.query(sql, [selecao,id], async (error,resultado)=>{
          try{
              res.status(200).json(resultado)
        }catch{
              res.status(400).json({"erro":error})
          }
        })
    }

     delete(req,res){
        const id = req.params.id
        const sql = "DELETE FROM selecoes WHERE id=?;"
        conexao.query(sql, id, async (error,resultado)=>{
          try{
              res.status(200).json(resultado)
        }catch{
            res.status(404).json(error)
          }
        })
    }

}
// padrão Singleton
export default new SelecaoController()