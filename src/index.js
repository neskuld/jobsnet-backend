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
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
	res.set("access-control-allow-origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
	res.set("access-control-allow-methods", "*");
	//Permitir headers fora do comum
	res.set("access-control-allow-headers", "content-type, c-custom-header");
	app.use(cors());
	next();
});
