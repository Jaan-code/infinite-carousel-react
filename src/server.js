const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, 'public')));


const PORT = 4569;
app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
});