var express = require('express');
const mysql = require('mysql');

const router = express.Router();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "boutique"
});

db.connect(function (err) {
    if (err) throw err;
    console.log("MySql connected on localhost port 3306");
});


router.post('/postLogement', (req, res) => {
    var val = req.body;
    var sql = "INSERT INTO logement(type,nbPieces,nbSurfaces, Etat, adresse, nomProprietaire, prenomProprietaire, prix, dateDispo, ville, nbGarage) VALUES (?) "
    var values = [
        val.typelogement,
        val.nbpieces,
        val.surfacelogement,
        val.etatlogement,
        val.adresselogement,
        val.nomproprio,
        val.prenomproprio,
        val.prixlogement,
        val.datedispo,
        val.villelogement,
        val.nbgarage
    ];
    db.query(sql, [values], (err, result) => {
        if (err) throw err;
        console.log("Post Logement number of records inserted " + result.affectedRows);
    });
});

router.post('/postClient', (req, res) => {
    var val = req.body;
    var sql = "INSERT INTO Client(nomClient,prenomClient,adresse,codePostal,tel,pseudo,mdp) VALUES (?) "
    var values = [
        val.nomClient,
        val.prenomClient,
        val.adresse,
        val.codePostal,
        val.tel,
        val.pseudo,
        val.mdp
    ];
    db.query(sql, [values], (err, result) => {
        if (err) throw err;
        console.log("Post Client number of records inserted " + result.affectedRows);
        res.send(result);
    });
});

router.post('/login', (req, res) => {
    var val = req.body;
    db.query("SELECT * FROM client WHERE pseudo = ? AND mdp = ?", [val.data[0], val.data[1]], (err, result) => {
        if (result.length > 0) {
            res.send("Bienvenue " + val.data[0]);
        }
        else {
            res.send("Pseudonyme ou mot de passe incorrect");
        }

    });
})

router.get('/lastClient', (req, res) => {
    db.query("SELECT * FROM client ORDER BY idClient DESC LIMIT 1;", (err, result) => {
        if (err) throw err;
        res.send(result);
    });
})

router.post('/postVisite', (req, res) => {
    var val = req.body;
    var sql = "INSERT INTO visite(code,idAgent,idClient,date) VALUES (?) "
    var values = [
        val.code,
        val.idAgent,
        val.idClient,
        val.dateVisite
    ];
    db.query(sql, [values], (err, result) => {
        if (err) throw err;
        console.log("Post visite number of records inserted " + result.affectedRows);
    });
});

router.get('/getlogement', (req, res) => {
    db.query("SELECT * FROM logement", (err, result) => {
        if (err) throw err;
        res.send(result);
    })
});

router.get('/getagent', (req, res) => {
    db.query("SELECT * FROM agent", (err, result) => {
        if (err) throw err;
        res.send(result);
    })
});

router.get('/getvisite', (req, res) => {
    db.query(`SELECT a.nom as NomAgent, a.prenom as PrenomAgent, c.nom as ClientNom, c.prenom as ClientPrenom, l.type, l.nbPieces, l.nbSurfaces, l.Etat, l.adresse, l.nomProprietaire, l.prenomProprietaire, l.prix, l.ville, l.nbGarage 
    FROM VISITE v, CLIENT c, LOGEMENT l , AGENT a
    WHERE v.code = l.code AND v.idAgent = a.idAgent AND v.idClient = c.idClient`, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

router.get('/getproduit', (req, res) => {
    db.query(`SELECT * FROM PRODUIT`, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

module.exports = router;