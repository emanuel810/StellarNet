const express = require('express');
const router = express.Router();
const sql = require('mssql')
const {config} = require("../config/sql_server")


// get --usuarioSoporte
// get --id 


// get
router.get('/', async (req, res, next)=> {
  let data = []

  try
  {
    await sql.connect(config)
    const resultado = await sql.query("SELECT T.TicketNumero,U.Usuario,T.Problema,T.Estado, U.Habilitado FROM Ticket AS T JOIN Usuario AS  U ON T.UsuarioNumero= U.UsuarioNumero  ")
    data = resultado.recordset
  }
  catch(err)
  {
    console.error(err)
    data = err
    res.statusCode = 500
  }
  res.send(data)
});

//get -usuario 
router.get('/:Correo', async (req, res, next)=> {
  let data = {}
  
  try
  {
    const connection = await sql.connect(config)
    const resultado = await connection.request()
                        .input("Correo", sql.VarChar, req.params.Correo)
                        .query("SELECT T.TicketNumero,U.Usuario,T.Problema,T.Estado, U.Habilitado FROM Ticket AS T JOIN Usuario AS  U ON T.UsuarioNumero= U.UsuarioNumero JOIN UsuarioSoporte AS US ON US.UsuarioSoporteNumero=T.UsuarioSoporteNumero WHERE US.Correo = @Correo");
    data = resultado.recordset
  }
  catch(err){
    console.error(err)
    data = err
    res.statusCode = 500
  }
  res.send(data)
});

//get -usuario 
router.get('/:TicketNumero/:Correo', async (req, res, next)=> {
  let data = {}
  
  try
  {
    const connection = await sql.connect(config)
    const resultado = await connection.request()
                        .input("TicketNumero", sql.Int, req.params.TicketNumero)
                        .input("Correo", sql.VarChar, req.params.Correo)
                        .query("select T.TicketNumero,U.Usuario,U.Nombre,U.Apellido,U.Correo, T.Direccion,T.Telefono ,T.Problema,T.Detalles,T.Estado,U.Habilitado FROM Ticket AS T JOIN Usuario AS  U ON T.UsuarioNumero= U.UsuarioNumero JOIN UsuarioSoporte AS US ON US.UsuarioSoporteNumero=T.UsuarioSoporteNumero WHERE T.TicketNumero= @TicketNumero AND US.Correo = @Correo");
    data = resultado.recordset
  }
  catch(err){
    console.error(err)
    data = err
    res.statusCode = 500
  }
  res.send(data)
});


// post
router.post("/", async (req, res, next)=>{
    const user = req.body;
    let resultado = {}
    try
    {
      let connection = await sql.connect(config)
      const result = await connection
                                .request()
                                .input("Direccion", sql.VarChar, user.Direccion)
                                .input("Telefono", sql.VarChar, user.Telefono)
                                .input("Problema", sql.VarChar, user.Problema)
                                .input("Detalles", sql.VarChar, user.Detalles)
                                .input("Estado", sql.VarChar, user.Estado)
                                .input("UsuarioNumero", sql.Int, user.UsuarioNumero)
                                .input("UsuarioSoporteNumero", sql.Int, user.UsuarioSoporteNumero)
                                .query("INSERT INTO Ticket (Direccion,Telefono,Problema,Detalles,Estado,UsuarioNumero,UsuarioSoporteNumero) VALUES(@Direccion, @Telefono, @Problema, @Detalles, @Estado, @UsuarioNumero, @UsuarioSoporteNumero)")
      resultado = result.rowsAffected      
    }
    catch(err)
    {
      console.error(err)
      res.statusCode = 500
      resultado = err
    }
    res.send(resultado)
  });

  // put --ticket
  router.put('/:UsuarioNumero', async (req, res, next)=> {
    let data = {}
    let {Habilitado} = req.body
    try
    {
      const connection = await sql.connect(config)
      const resultado = await connection.request()
                          .input("UsuarioNumero", sql.Int, req.params.UsuarioNumero)
                          .query("SELECT Habilitado FROM Usuario WHERE UsuarioNumero = @UsuarioNumero")
      if (resultado.recordset.length > 0)
      {
        const result = await connection
        .request()
        .input("Habilitado", sql.Char,Habilitado)
        .query("UPDATE Usuario SET Habilitado=@Habilitado  WHERE UsuarioNumero = @UsuarioNumero")
        data = result.rowsAffected
      }
      
    }
    catch(err){
      console.error(err)
      data = err
      res.statusCode = 500
    }
    res.send(data)
  });




module.exports = router;