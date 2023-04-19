const express = require("express");
const router = express.Router();
const auth = require('../../middlewares/auth');

const {
  listController,
  getByIdController,
  addController,
  removeController,
  updateControllers,
  updateStatusControllers,
} = require("../../controllers/contacts");

const ctrlWrapper = require("../../middlewares/ctrWrapper");

router.get("/", auth, ctrlWrapper(listController));

router.get("/:id", ctrlWrapper(getByIdController));

router.post("/", auth, ctrlWrapper(addController));

router.delete("/:id", ctrlWrapper(removeController));

router.patch("/:id/favorite", ctrlWrapper(updateStatusControllers));

router.put("/:id", ctrlWrapper(updateControllers));

module.exports = router;
