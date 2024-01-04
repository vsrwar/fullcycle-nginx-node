const express = require('express')
const app = express()
const port = 4747
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const { faker } = require('@faker-js/faker')

function insertName() {
    const randomName = faker.person.fullName();
    const connection = mysql.createConnection(config)
    const insertQuery = `INSERT INTO people(name) VALUES ("` + randomName + `")`
    connection.query(insertQuery)
    connection.end()
}

app.get('/', (req, res) => {
    insertName()

    const connection = mysql.createConnection(config)
    const selectQuery = `SELECT * FROM people`

    connection.connect(function(err) {
        if(err) console.error(err)
    
        connection.query(selectQuery, function(err, result) {
            if(err) console.error(err)
            res.render('index.ejs', {
                title: 'Names',
                data: result
            })
        })
    })
})

app.listen(port, () => {
    console.log('Escutando na porta ' + port)
})
