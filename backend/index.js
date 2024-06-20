const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://adminuser:adminuserpassword@serverlessinstance0.g3z6xpr.mongodb.net/?retryWrites=true&w=majority&appName=ServerlessInstance0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = process.env.PORT || 5000;
app.use('/api/auth', require('./routes/auth'));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
