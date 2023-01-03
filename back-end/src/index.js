const express = require('express');
const cors = require('cors');
const mysql2 = require('mysql2/promise')
const loginRoutes = require('./routes/loginRoute');

require('dotenv').config();
const PORT = process.env.PORT_BACK || 4000;

const app = express();
app.use(cors());
app.use(express.json());

app.use(loginRoutes);

app.listen(PORT, () => console.log(`
  ***************************
  Server running on port ${PORT}
  CTRL+C to stop server......
  ***************************
  `));