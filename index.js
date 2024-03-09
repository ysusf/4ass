import express from 'express';
import { sequelize } from './database/dbConnection.js';
import userRouter from './src/modules/users/user.router.js';
import noteRouter from './src/modules/notes/note.router.js';

const app = express();
const port = 3000;

// Middleware 
app.use(express.json());

sequelize.sync();

// Mounting 
app.use('/api/v1', userRouter);
app.use('/api/v1', noteRouter);


app.listen(port, () =>
  console.log(`Listening ${port}`)
);