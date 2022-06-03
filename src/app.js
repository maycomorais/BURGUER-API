import burguerRouter from "./routes/burguer-router.js";
import usuariosRouter from './routes/usuarios.routes';
import loginRouter from './routes/login.routes';
import express from "express";
import cors from "cors";



const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.use("/burguers", burguerRouter);
app.use('/usuarios', usuariosRouter);
app.use('/login', loginRouter);

export default app;
