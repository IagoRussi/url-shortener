import express from 'express'

const app = express()


app.get('/', (req, res) => {
 res.send("Servidor do Iago feito na mão")
})

app.listen(3000)
