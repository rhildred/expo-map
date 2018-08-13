import express from 'express';

let app = express();
app.use(express.static('public'));
app.use(express.static('src'));

const port = 8080;
app.listen(port,  () => console.log('listening on port:',+ port ));
