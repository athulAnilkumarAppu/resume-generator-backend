const express = require('express')
const bodyParser = require('body-parser')
const pdf = require('html-pdf')
const cors = require('cors')

const pdfTemplate = require('./documents')

const app = express()

const port = process.env.PORT || 3001

const puppeteer = require('puppeteer');

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('./documents', {waitUntil: 'networkidle0'});
    await page.pdf({path: 'resume.pdf', format: 'A4'});
    await browser.close();
  })();

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

