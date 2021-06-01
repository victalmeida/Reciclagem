const express = require("express");
const Router = express.Router();
const authMiddleware = require("../middleware/auth.js");
const Colletion = require("../database/model/collection");
const CollectionColetor = require("../database/model/CollectionColetor");
const { response } = require("../../index.js");

Router.use(authMiddleware);

Router.get("/collection", async (req, res) => {
  const collection = await Colletion.findAll({
    where: { status: "1" },
    include: [
      {
        association: "collectionAddress",
      },
      {
        association: "collectionReciclado",
      },
      {
        association: "collectionStatus",
      },
    ],
  });

  return res.json(collection);
});

Router.get("/user/collection/:status", async (req, res) => {
  const { status } = req.params;
  const user = req.userId;

  if (status !== "0") {
    const collection = await Colletion.findAll({
      where: { status: status },
      include: [
        {
          association: "collectionAddress",
        },
        {
          association: "collectionReciclado",
        },
        {
          association: "collectionStatus",
        },
        {
          association: "collectionCollectionCollector",
          where: { user_id: user },
        },
      ],
    });
    return res.json(collection);
  }

  const collection = await Colletion.findAll({
    include: [
      {
        association: "collectionAddress",
      },
      {
        association: "collectionReciclado",
      },
      {
        association: "collectionStatus",
      },
      {
        association: "collectionCollectionCollector",
        where: { user_id: user },
      },
    ],
  });

  return res.json(collection);
});

Router.post("/:id/collection", async (req, res) => {
  const user = req.userId;
  const { id } = req.params;

  const collection = await Colletion.findByPk(id);
  collection.status = 2;
  collection.save();

  const rellation = await CollectionColetor.create({
    collection_id: id,
    user_id: user,
  });

  return res.json({ collection, rellation });
});

Router.put("/:id/collection/:status", async (req, res) => {
  const user = req.userId;
  const { id, status } = req.params;

  const collection = await Colletion.findByPk(id);
  collection.status = status;
  collection.save();

  if (status == 1) {
    const rellation = await CollectionColetor.findOne({
      where: { collection_id: id },
    });
    rellation.destroy();
  }

  return res.json(collection);
});

Router.get("/address", async (req, res) => {
  const user = req.userId;
  // const colletion = await Colletion.findAll({
  //   where: {
  //     user_id: user_id,
  //   },
  // });

  const colletion = await Colletion.findAll({
    include: [
      {
        association: "collectionCollectionCollector",
        where: { user_id: user },
      },
    ],
  });

  const resp = [];

  for (var i = 0; i < colletion.length; i++) {
    const addres = await Address.findByPk(colletion[i].address_id);

    resp.push(addres);
  }

  return res.json(resp);
});

module.exports = Router;
