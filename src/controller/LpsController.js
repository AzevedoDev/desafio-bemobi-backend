const { carriers } = require("../data.json");

class LpsController {
  show(req, res) {
    return res.json(carriers);
  }
}

module.exports = new LpsController();
