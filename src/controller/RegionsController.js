const { regions } = require("../data.json");

class RegionsController {
  show(req, res) {
    return res.json(regions);
  }
}

module.exports = new RegionsController();
