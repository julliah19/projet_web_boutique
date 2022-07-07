create database boutique;
use boutique;

CREATE TABLE Administrateur(
   idAdmin INTEGER auto_increment UNIQUE,
   nomAdmin VARCHAR(50) NOT NULL,
   prenomAdmin VARCHAR(50) NOT NULL,
   PRIMARY KEY(idAdmin)
);

CREATE TABLE Client(
   idClient INTEGER auto_increment UNIQUE,
   nomClient VARCHAR(50) NOT NULL,
   prenomClient VARCHAR(50) NOT NULL,
   adresse VARCHAR(50) NOT NULL,
   codePostal VARCHAR(50) NOT NULL,
   tel VARCHAR(50) NOT NULL,
   pseudo VARCHAR(255),
   mdp VARCHAR(255),
   PRIMARY KEY(idClient)
);

CREATE TABLE Commande(
   idCommande INTEGER auto_increment UNIQUE,
   date DATE NOT NULL,
   idclient INTEGER NOT NULL,
   PRIMARY KEY(idCommande),
   FOREIGN KEY(idClient) REFERENCES Client(idClient)
);

CREATE TABLE Produit(
   idProduit INTEGER AUTO_INCREMENT UNIQUE,
   nomProduit VARCHAR(50),
   prix VARCHAR(50),
   dispo BOOLEAN,
   img VARCHAR(50),
   description VARCHAR(50),
   stock INTEGER,
   PRIMARY KEY(idProduit)
);

CREATE TABLE CB(
   idCB INTEGER AUTO_INCREMENT UNIQUE,
   nomTitulaire VARCHAR(50),
   numCarte VARCHAR(50),
   PRIMARY KEY(idCB)
);

CREATE TABLE Paypal(
   idPaypal INTEGER AUTO_INCREMENT,
   mail VARCHAR(50),
   mdp VARCHAR(50),
   PRIMARY KEY(idPaypal)
);

CREATE TABLE CategorieProduit(
   idCatProd INTEGER AUTO_INCREMENT UNIQUE,
   libelleCatProd VARCHAR(50),
   imgCatProd VARCHAR(50),
   idProduit INTEGER NOT NULL,
   PRIMARY KEY(idCatProd),
   FOREIGN KEY(idProduit) REFERENCES Produit(idProduit)
);

CREATE TABLE CommandeProd(
   idCommande INTEGER auto_increment UNIQUE,
   idProduit INTEGER,
   qte INTEGER,
   PRIMARY KEY(idCommande, idProduit),
   FOREIGN KEY(idCommande) REFERENCES Commande(idCommande),
   FOREIGN KEY(idProduit) REFERENCES Produit(idProduit)
);

CREATE TABLE Paiement(
   idCommande INTEGER auto_increment UNIQUE,
   idPaiement VARCHAR(50),
   idCB INTEGER NOT NULL,
   idPaypal INTEGER NOT NULL,
   PRIMARY KEY(idCommande),
   FOREIGN KEY(idCommande) REFERENCES Commande(idCommande),
   FOREIGN KEY(idCB) REFERENCES CB(idCB),
   FOREIGN KEY(idPaypal) REFERENCES Paypal(idPaypal)
);

INSERT INTO Client(nomClient,prenomClient,adresse,codePostal,tel,pseudo,mdp) VALUES("JIANG", "Senhao", "Adresse Vide", "CodePostal", "Téléphone", "Pseudonyme", "MOTDEPASSE");
INSERT INTO Client(nomClient,prenomClient,adresse,codePostal,tel,pseudo,mdp) VALUES("POOREEA", "Fardeen", "Adresse Vide", "CodePostal", "Téléphone", "xboxfafoune93", "6127");
INSERT INTO Client(nomClient,prenomClient,adresse,codePostal,tel,pseudo,mdp) VALUES("JIANG", "Janik", "Adresse Vide", "CodePostal", "Téléphone", "Chazeria", "3095");
INSERT INTO Client(nomClient,prenomClient,adresse,codePostal,tel,pseudo,mdp) VALUES("SOTHIRAJ", "Julliah", "Adresse Vide", "CodePostal", "Téléphone", "julliah", "3808");

INSERT INTO Produit(nomProduit,prix,dispo,img,description,stock) VALUES("Tshirt Blanc", "20", true, "tshirt-blanc.jpg","Un tshirt blanc classique !", 56);
INSERT INTO Produit(nomProduit,prix,dispo,img,description,stock) VALUES("Tshirt Noir", "19.99", true, "tshirt-noir.jpg","Un tshirt noir classique !", 24);
INSERT INTO Produit(nomProduit,prix,dispo,img,description,stock) VALUES("Bottes Noires", "189.99", true, "bottes-noires.jpg","Des bottes noires classe !", 10);


