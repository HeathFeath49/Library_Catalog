const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello',(req,res) => {
	res.send({express: 'Hell From Express'});
});

app.listen(port, () => console.log('Server running'));