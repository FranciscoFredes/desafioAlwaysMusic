-- Crear base de datos
CREATE DATABASE estudiantes;

-- Crear tabla alumnos
CREATE TABLE alumnos (
    nombre VARCHAR(100),
    rut VARCHAR(14),
    curso VARCHAR(50),
    nivel INT
);
-- Insertar un usuario default para probar
INSERT INTO alumnos(nombre, rut, curso, nivel) VALUES ('Juan', '123.123-2', 'guitarra', 3);