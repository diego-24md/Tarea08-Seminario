const db = require('../config/db')

// 📥 Crear mascota
exports.crearMascota = async (req, res) => {
  const { nombre, especie, raza, edad, sexo, peso } = req.body
  try {
    const [result] = await db.query(
      'INSERT INTO mascotas (nombre, especie, raza, edad, sexo, peso) VALUES (?, ?, ?, ?, ?, ?)',
      [nombre, especie, raza, edad, sexo, peso]
    )
    res.status(201).json({ message: 'Mascota creada', id: result.insertId })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// 📄 Mostrar todas las mascotas
exports.obtenerMascotas = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM mascotas')
    res.json(rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// 🔍 Mostrar una mascota por ID
exports.obtenerMascotaPorId = async (req, res) => {
  const { id } = req.params
  try {
    const [rows] = await db.query('SELECT * FROM mascotas WHERE id = ?', [id])
    if (rows.length === 0) return res.status(404).json({ message: 'Mascota no encontrada' })
    res.json(rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// ✏️ Actualizar mascota
exports.actualizarMascota = async (req, res) => {
  const { id } = req.params
  const { nombre, especie, raza, edad, sexo, peso } = req.body
  try {
    const [result] = await db.query(
      'UPDATE mascotas SET nombre=?, especie=?, raza=?, edad=?, sexo=?, peso=? WHERE id=?',
      [nombre, especie, raza, edad, sexo, peso, id]
    )
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Mascota no encontrada' })
    res.json({ message: 'Mascota actualizada correctamente' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// 🗑️ Eliminar mascota
exports.eliminarMascota = async (req, res) => {
  const { id } = req.params
  try {
    const [result] = await db.query('DELETE FROM mascotas WHERE id = ?', [id])
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Mascota no encontrada' })
    res.json({ message: 'Mascota eliminada correctamente' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
