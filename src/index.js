require("dotenv").config();
const cors = require("cors");
const express = require("express");
const emailRoutes = require("./routes/emailRoutes");
const { port } = require("./helpers/const");

/** Server main entry */
const app = express();

/** Middlewares */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** Setup routes */
app.use(emailRoutes.path, emailRoutes.router);

/** Hello world */
app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
