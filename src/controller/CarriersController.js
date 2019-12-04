const { carriers } = require("../data.json");

class CarriersController {
  show(req, res) {
    return res.json(carriers);
  }
}

module.exports = new CarriersController();
