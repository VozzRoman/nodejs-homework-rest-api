const express = require("express");
const router = express.Router();

const {
  listController,
  getByIdController,
  addController,
  removeController,
  updateControllers,
  updateStatusControllers,
} = require("../../controllers/contacts");

const ctrlWrapper = require("../../middlewares/ctrWrapper");

router.get("/", ctrlWrapper(listController));

router.get("/:id", ctrlWrapper(getByIdController));

router.post("/", ctrlWrapper(addController));

router.delete("/:id", ctrlWrapper(removeController));

router.patch("/:id/favorite", ctrlWrapper(updateStatusControllers));

router.put("/:id", ctrlWrapper(updateControllers));

module.exports = router;
