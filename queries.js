const pool = require("./dbConfig");

// Función para ejecutar una consulta SQL
async function consultaSQL() {
    // Obtenemos una conexión de la pool
    const client = await pool.connect();
  
    try {
      // Ejecutamos la consulta SQL
      const result = await client.query("SELECT * FROM alumnos");
  
      // Mostramos los resultados
      console.log(result.rows);
    } catch (error) {
      console.error("Error al ejecutar la consulta:", error);
    } finally {
      // Liberamos la conexión
      client.release();
    }
  };

  //Funcion para seleccionar alumno por rut 
async function seleccionarAlumnoRut(rut){
  const client = await pool.connect();
  try {
      //Ejecutar la consulta SQL
      const result = await client.query("SELECT * FROM alumnos WHERE rut = $1", [rut]);
      //Mostramos los resultados
      console.log(result.rows);
  } catch (error) {
    console.error("Error buscando al alumno", error);
  } finally {
    //Liberamos la conexión
    client.release();
  }
};


  // Función para insertar un usuario
const agregarAlumno = async (nombre, rut, curso) => {
    const client = await pool.connect();
    const text = "INSERT INTO alumnos(nombre, rut, curso, nivel) VALUES($1, $2, $3, $4)";
    const values = [nombre, rut, curso, 1 ]
  
    try {
      const response = await client.query(text, values);
      console.log("Alumno agregado ",response);
    } catch (error) {
      console.error("Error agregando al alumno:", error);
    } finally {
      client.release();
    }   
  };

  // Función para eliminar un usuario
const eliminarAlumno = async (rut) => {
    const client = await pool.connect();
    const text = "DELETE FROM alumnos WHERE rut = $1";
    const values = [rut];
  try {
    const response = await client.query(text, values);
    console.log("Alumno eliminado ",response);
  } catch (error) {
    console.error("Error eliminando al alumno:", error);
  } finally {
    client.release();
    }    
  };

  //Funcion para actualizar alumno
const actualizarAlumno = async (nombre, rut, curso, nivel, id) => {
  const client = await pool.connect();
  const text = "UPDATE alumnos SET nombre = $1, rut = $2, curso = $3, nivel = $4 WHERE id = $5";
  const values = [nombre, rut, curso, nivel, id];
  try{
    const res = await client.query(text, values);
    console.log("Alumno actaulizado ",res);
  } catch (err){
    console.error("Error actualizando el alumno : ", err);
  } finally {
    client.release();
  }
};  



  module.exports = { consultaSQL, agregarAlumno, eliminarAlumno, seleccionarAlumnoRut, actualizarAlumno };