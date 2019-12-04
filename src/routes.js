const { Router } = require("express");
const routes = new Router();
const controller = require("./controller");

routes.get("/regions", controller.RegionsController.show);
routes.get("/carriers", controller.CarriersController.show);
routes.get("/lps", controller.LpsController.show);

module.exports = routes;
