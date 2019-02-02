import express from "express";
const offices = require("../controllers/offices");
const parties = require("../controllers/parties");

const router = express.Router(); 

router.get("/offices/:id", offices.getOffice);
router.get("/offices/", offices.getOffices);
router.post("/offices/", offices.createOffice);

router.delete("/parties/:id", parties.deleteParty);
router.get("/parties/:id", parties.getParty);
router.patch("/parties/:id", parties.editParty);
router.get("/parties/", parties.getParties);
router.post("/parties/", parties.createParty);

export default router;
