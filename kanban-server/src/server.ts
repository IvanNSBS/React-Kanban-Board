import express from 'express';
import User from '../../data/account/user'

const app = express();
const PORT = 8000;

const user: User = new User('Krakowski');

app.get('/', (req,res) => {
    res.send(`User name: ${user.username}`)
});

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});