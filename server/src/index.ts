import express from "express";

import aulasRoutes from "./routes/courses";
import authenticationRoutes from "./routes/authentication";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.status(200).send();
  } else {
    next();
  }
});

app.use("/aulas", aulasRoutes);
app.use("/auth", authenticationRoutes);

app.listen(3333, () => {
  console.log("Server started on port 3333");
});
