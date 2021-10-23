import express from "express";
import { server_port } from "./config/server";
import db from "./db/models";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const start = async () => {
  try {
    db.sequelize.authenticate().then((): void => {
      db.sequelize.sync({ force: true });
      app.listen(server_port, () => console.log(`Started on ${server_port}`));
    });
  } catch (err) {
    console.log(err);
  }
};

start();
