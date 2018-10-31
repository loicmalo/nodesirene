var express = require('express');
var router = express.Router();
var qp = require('../../utils/query-parser'); //Function getQuery returns SQL from JSON.
var repo = require('../../repositories/sireneRepository');
var fmanager = require('../../utils/file-manager');

var VerifyToken = require('../../auth/verifyToken');

/* GET home page of export. */
router.get('/', VerifyToken, function (req, res) {
  var param = req.query.param;

  if (param === undefined) { //Case with no parameter given.
    var result = repo.defaultQuery();
    res.render('sample', {title: 'NodeServer - Sirene', table: result});
  }

  else {
    var maxResults = 1000;
    try {
      var queryJson = qp.getQueryJson(param, maxResults);
      var result = repo.queryWithParam(queryJson);

      result.then(table => { //SUCCESS CALLBACK
        if (table === undefined) {
          throw "Table could not be acquired";
        }
        let JSONstr = fmanager.jsonCreator(table); //Turns table into returnable JSON.

        let nbResults = table.length;
        if (nbResults === maxResults) {
          lastSiret = '"' + String(table[table.length - 1]["dataValues"]["siret"]) + '"'; //New offset if table.length = 100.
        }
        else {
          lastSiret = '0'; //Last page reached - going back to the begining.
        }
        console.log(lastSiret);

        let sendResult = new Object();
        sendResult.offset = JSON.parse(lastSiret);
        sendResult.sirene = JSON.parse(JSONstr);

        res.json(JSON.parse(JSON.stringify(sendResult))); //Sending the JSON result : {siren: result, offset: newOffset}

      }).catch(e => {
        console.log(e);
        res.sendStatus(500);
      });
    }

    catch (e) { //TO FINISH LATER
      console.log(e);
      res.sendStatus(500);
      //res.render('error', {message: "Erreur", error: e});
    }

  }

});






/* POST to home page of export. */
router.get('/', VerifyToken, function (req, res) {
  let param = req.body.param;  

  if (param === undefined) { //Case with no parameter given.
    throw "Param is required";
  }

  else {
    var maxResults = 1000;
    try {
      var queryJson = qp.getQueryJson(param, maxResults);
      var result = repo.queryWithParam(queryJson);

      result.then(table => { //SUCCESS CALLBACK
        if (table === undefined) {
          throw "Table could not be acquired";
        }
        let JSONstr = fmanager.jsonCreator(table); //Turns table into returnable JSON.

        let nbResults = table.length;
        if (nbResults === maxResults) {
          lastSiret = '"' + String(table[table.length - 1]["dataValues"]["siret"]) + '"'; //New offset if table.length = 100.
        }
        else {
          lastSiret = '0'; //Last page reached - going back to the begining.
        }
        console.log(lastSiret);

        let sendResult = new Object();
        sendResult.offset = JSON.parse(lastSiret);
        sendResult.sirene = JSON.parse(JSONstr);

        res.json(JSON.parse(JSON.stringify(sendResult))); //Sending the JSON result : {siren: result, offset: newOffset}

      }).catch(e => {
        console.log(e);
        res.sendStatus(500);
      });
    }

    catch (e) { //TO FINISH LATER
      console.log(e);
      res.sendStatus(500);
      //res.render('error', {message: "Erreur", error: e});
    }

  }

});

module.exports = router;
