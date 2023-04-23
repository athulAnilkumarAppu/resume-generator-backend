const express = require('express')
const bodyParser = require('body-parser')
const pdf = require('html-pdf')
const cors = require('cors')

const pdfTemplate = require('./documents')

const app = express()

const port = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.post('/create-pdf', (req, res)=> {
    pdf.create(pdfTemplate(req.body), {}).toFile('resume.pdf', (err)=> {
        if(err){
             res.send({status: false, errorMessage: err, extras: req.body})
        }else{
            res.send(true)
        }
         
    })
})

app.get('/fetch-pdf', (req, res)=> {
    res.sendFile(`${__dirname}/resume.pdf`)
})

app.listen(port, ()=> console.log(`listening on port ${port}`))

