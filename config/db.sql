-- Crear base de datos
CREATE DATABASE mascotas_db;
USE mascotas_db;

-- Crear tabla mascotas
CREATE TABLE mascotas (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  especie ENUM('Perro','Gato','Ave','Conejo','Otro') NOT NULL,
  raza VARCHAR(50) DEFAULT NULL,
  edad INT(11) DEFAULT NULL,
  sexo ENUM('Macho','Hembra') NOT NULL,
  peso DECIMAL(5,2) DEFAULT NULL,
  fecha_registro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Insertar registros iniciales
INSERT INTO mascotas (nombre, especie, raza, edad, sexo, peso, fecha_registro) VALUES
('Rocky', 'Perro', 'Labrador', 4, 'Macho', 25.50, NOW()),
('Luna', 'Gato', 'Persa', 2, 'Hembra', 4.30, NOW()),
('Max', 'Perro', 'Bulldog', 3, 'Macho', 20.20, NOW()),
('Kira', 'Conejo', 'Mini Lop', 1, 'Hembra', 2.10, NOW()),
('Toby', 'Ave', 'Cacatúa', 5, 'Macho', 0.90, NOW());

SELECT * FROM mascotas;
