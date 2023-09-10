const express = require('express')
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.json())    // <==== parse request body as JSON
const port = 6578
app.listen(port)
console.log(`Local server listen on port ${port}`)
console.log(`http://localhost:${port}/`)
app.get('/*', (req, res) => {
    const log = {requestMethod: 'get', requestPath:  req.path}
    console.log(log)
    res.json(log)
});
app.post('/*', (req, res) => {
    const log = {requestMethod: 'post', requestPath:  req.path, requestBody: req.body}
    console.log(log)
    res.json(log)
});

app.put('/*', (req, res) => {
    const log = {requestMethod: 'put',requestPath:  req.path, requestBody: req.body}
    console.log(log)
    res.json(log)
});
