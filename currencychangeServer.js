const {MongoClient} = require("mongodb");
const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const profile = require("./profile.js");
const {Console} = require("console");
app.use(express.urlencoded());
app.use(express.json());

app.post("/currencyexchange", (req, res) => {
	//console.log(typeof parseInt(req.body.usd));
	let firstChare = 10;
	let sencondCharge = 5;
	let thirdCharge = 3;
	let rate = 2;
	let recived = 0;
	let amt = req.body.usd;
	if (req.body.usd < 1000) {
		rate = 1.02;
		amt = amt - firstChare;
		recived = amt * rate;
	} else if (req.body.usd > 1000 && req.body.usd < 10000) {
		rate = 1.025;
		amt = amt - sencondCharge;
		recived = amt * rate;
	} else if (req.body.usd > 10000) {
		rate = 1.03;
		amt = amt - thirdCharge;
		recived = amt * rate;
	}
	recivedamt = {recived: recived};
	res.send(recivedamt);
});
