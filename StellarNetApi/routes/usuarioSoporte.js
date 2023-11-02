const express = require('express');
const router = express.Router();
const sql = require('mssql')
const { config } = require("../config/sql_server")


// get
router.get('/', async (req, res, next) => {
  let data = []

  try {
    await sql.connect(config)
    const resultado = await sql.query("SELECT Nombre FROM UsuarioSoporte")
    data = resultado.recordset
  }
  catch (err) {
    console.error(err)
    data = err
    res.statusCode = 500
  }
  res.send(data)
});



// post 
router.post("/", async (req, res, next) => {
  const user = req.body;
  let resultado = {}
  try {
    let connection = await sql.connect(config)
    const result = await connection
      .request()
      .input("Nombre", sql.VarChar, user.Nombre)
      .input("Correo", sql.VarChar, user.Correo)
      .input("Contrasena", sql.VarChar, user.Contrasena)
      .query("INSERT INTO UsuarioSoporte (Nombre,Correo,Contrasena) VALUES (@Nombre, @Correo, @Contrasena)")
    resultado = result.rowsAffected
  }
  catch (err) {
    console.error(err)
    res.statusCode = 500
    resultado = err
  }
  res.send(resultado)
});

//get -usuario -contrasena
router.get('/:Correo/:Contrasena', async (req, res, next) => {
  let data = {}

  try {
    const connection = await sql.connect(config)
    const resultado = await connection.request()
      .input("Correo", sql.VarChar, req.params.Correo)
      .input("Contrasena", sql.VarChar, req.params.Contrasena)
      .query("SELECT UsuarioSoporteNumero,Nombre,Correo,Contrasena FROM UsuarioSoporte WHERE Correo = @Correo and Contrasena = @Contrasena");
    data = resultado.recordset[0]
  }
  catch (err) {
    console.error(err)
    data = err
    res.statusCode = 500
  }
  res.send(data)
});


//get -usuario 
router.get('/:Correo', async (req, res, next) => {
  let data = {}

  try {
    const connection = await sql.connect(config)
    const resultado = await connection.request()
      .input("Correo", sql.VarChar, req.params.Correo)
      .query("SELECT UsuarioSoporteNumero FROM UsuarioSoporte WHERE Correo = @Correo");
    data = resultado.recordset[0]
  }
  catch (err) {
    console.error(err)
    data = err
    res.statusCode = 500
  }
  res.send(data)
});

module.exports = router;