const express = require("express");
const mongoose = require("mongoose");
const swaggerUI = require("swagger-ui-express");
const SwaggerDocs = require("./swagger.json");
const routes = require("./routes");
const app = express();
const cors = require('cors');

mongoose.connect(
	"mongodb+srv://jobsnetapi:GvcyXPEBWrPqH6K1@cluster0.g4ngb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	}
);

app.use(cors());
app.use(express.json());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(SwaggerDocs));
app.use(routes);
app.listen(process.env.PORT || 5000);
app.use(function (req, res, next) {
	// Website you wish to allow to connect
	res.setHeader("Access-Control-Allow-Origin", "*");

	// Request methods you wish to allow
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, PATCH, DELETE"
	);

	// Request headers you wish to allow
	res.setHeader(
		"Access-Control-Allow-Headers",
		"X-Requested-With,content-type"
	);

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader("Access-Control-Allow-Credentials", true);

	// Pass to next layer of middleware
	next();
});
