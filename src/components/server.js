const express = require('express');
const mongoose = require('mongoose');
const mongoose= require('mongoose');
const mongoURI ='mongodb+srv://adityam:6O5foLZ8Ri0rnZ8S@dtcticket.6drms.mongodb.net/?retryWrites=true&w=majority&appName=dtcticket';
const Ticket = require(/model/ticket);
// App setup
const app = express();
app.use(express.json()); 

// MongoDB connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define schema and model
const ticketSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  route: { type: String, required: true },
  date: { type: String, required: true },
  passengers: { type: Number, required: true },
});
 Ticket = mongoose.model('Ticket', ticketSchema);

// Route to save ticket data
app.post('http://localhost:5000/api/book-ticket', async (req, res) => {
  const { name, email, route, date, passengers } = req.body;

  if (!name || !email || !route || !date || !passengers) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const newTicket = new Ticket({ name, email, route, date, passengers });
    await newTicket.save();

    res.status(201).json({ message: `Ticket for ${name} has been successfully booked.` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
