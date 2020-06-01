const express = require('express');
const app = express();
const connectDB = require('./config/db');

// Connect to database
connectDB();

app.get('/', (req, res) => {
  res.send('API running');
});

// Define Routes

app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/users', require('./routes/api/users'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
