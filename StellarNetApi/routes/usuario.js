const express = require('express');
const router = express.Router();
const sql = require('mssql')
const {config} = require("../config/sql_server")




router.get('/', async (req, res, next)=> {
  let data = []

  try
  {
    await sql.connect(config)
    const resultado = await sql.query("SELECT UsuarioNumero, Nombre, Apellido, Correo, Usuario, Contrasena, Habilitado FROM Usuario")
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


//post 
router.post("/", async (req, res, next)=>{
  const user = req.body;
  let resultado = {}
  try
  {
    let connection = await sql.connect(config)
    const result = await connection
                              .request()
                              .input("Nombre", sql.VarChar, user.Nombre)
                              .input("Apellido", sql.VarChar, user.Apellido)
                              .input("Correo", sql.VarChar, user.Correo)
                              .input("Usuario", sql.VarChar, user.Usuario)
                              .input("Contrasena", sql.VarChar, user.Contrasena)
                              .input("Habilitado", sql.Char, user.Habilitado)
                            
                              .query("INSERT INTO Usuario (Nombre, Apellido, Correo, Usuario, Contrasena, Habilitado) VALUES (@Nombre, @Apellido, @Correo, @Usuario, @Contrasena, @Habilitado)")
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

//get -usuario -contrasena
router.get('/:Usuario/:Contrasena', async (req, res, next)=> {
  let data = {}
  
  try
  {
    const connection = await sql.connect(config)
    const resultado = await connection.request()
                        .input("Usuario", sql.VarChar, req.params.Usuario)
                        .input("Contrasena", sql.VarChar, req.params.Contrasena)
                        .query("SELECT UsuarioNumero FROM Usuario WHERE Usuario = @Usuario and Contrasena = @Contrasena");
    data = resultado.recordset[0]
  }
  catch(err){
    console.error(err)
    data = err
    res.statusCode = 500
  }
  res.send(data)
});

//get -usuario 
router.get('/:Usuario', async (req, res, next)=> {
  let data = {}
  
  try
  {
    const connection = await sql.connect(config)
    const resultado = await connection.request()
                        .input("Usuario", sql.VarChar, req.params.Usuario)
                        .query("SELECT UsuarioNumero FROM Usuario WHERE Usuario = @Usuario");
    data = resultado.recordset[0]
  }
  catch(err){
    console.error(err)
    data = err
    res.statusCode = 500
  }
  res.send(data)
});


//put --habilitado
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