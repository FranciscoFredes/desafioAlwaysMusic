const {
    consultaSQL,
    agregarAlumno,
    eliminarAlumno,
    seleccionarAlumnoRut,
    actualizarAlumno

  } = require("./queries");
  
//Para llamar a la funcion descomentar y ejecutar en consola server.js
  consultaSQL();
//agregarAlumno("Brian May", "12.345.678-9", "guitarra", 3);
// eliminarAlumno("12.345.678-9");
// seleccionarAlumnoRut("123.123");
// actualizarAlumno("Brian May", "12.34.678-9", "guitarra", 10, 1);