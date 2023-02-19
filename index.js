const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/myroute', (req, res) => {
  const data = req.body;
  // Do something with the data here

  const spawner = require('child_process').spawn;

    const data_to_pass_in = data.url;

    const python_process = spawner('python',['./scrap.py',data_to_pass_in]);
    python_process.stdout.on('data',(data)=>{
    var result_data = data;
    res.send(result_data);
    });

});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
