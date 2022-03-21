const express = require("express");
const updateOrder = require("../actions/updateOrder");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

router.post("/update-order", (req, res) => {

  updateOrder(req.params.id);


});


module.exports = router;