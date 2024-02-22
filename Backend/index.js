const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connection } = require("./Config/db");
const { Transaction } = require("./routes/TransactionData.Route");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", Transaction);
app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (err) {
    console.log(`something wrong with DB ${err}`);
  }
  console.log(`server is listening on port ${process.env.PORT}`);
});
//change