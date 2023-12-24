const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const app = express()

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mern1234',
    database: 'node'
})

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM makinat'
    db.query(sql, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.post('/create', (req, res) => {
    const newMakinat = 'INSERT INTO `makinat` (`Marka_e_makines`, `Modeli_i_makines`, `Viti_i_prodhimit`, `Kubikazha` ) VALUES (?);'
    const values = [
        req.body.marka,
        req.body.modeli,
        req.body.viti,  
        req.body.kubikazha  
    ]

    db.query(newMakinat, [values], (err, data) => {
        if(err) return res.json('Gabim gjate vendosjes se shenimeve te reja')
        return res.json(data)
    })
})


app.put('/update/:id', (req, res) => {

    const updateMakinat = 'UPDATE `makinat` SET `Marka_e_makines` = ?, `Modeli_i_makines` = ?, `Viti_i_prodhimit` = ?, `Kubikazha` = ? WHERE (`ID_makinat` = ?);'
    const values = [
        req.body.marka,
        req.body.modeli,
        req.body.viti,
        req.body.kubikazha
    ]
    const id = req.params.id

    db.query(updateMakinat, [...values, id], (err, data) => {
        if(err) return res.json('Gabim gjate perditesimit te shenimeve')
        return res.json(data)
    })
})


app.delete('/makinat/:id', (req, res) => {

    const deleteMakinat = 'DELETE FROM makinat WHERE (ID_makinat = ?)'

    const id = req.params.id

    db.query(deleteMakinat, [id], (err, data) => {
        if(err) return res.json('Gabim gjate fshirjes se shenimeve')
        return res.json(data)
    })
})






app.listen(5000, () => {
    console.log('Server started at port 5000')
})
