create database agence;
use agence;

create table logement(
code int not null auto_increment unique,
type ENUM('Maison', 'Appartement', 'Pavillon'),
nbPieces int (50) not null,
nbSurfaces int (50) not null,
Etat ENUM('Neuf','Bon état','Bon','Mauvais état'),
adresse varchar(20)not null,
nomProprietaire varchar(20) not null,
prenomProprietaire varchar(20),
prix int(10) not null,
dateDispo Date not null,
ville varchar(20) not null,
nbGarage int not null,
PRIMARY KEY(code));


create table client(
idClient int not null auto_increment unique,
prenom varchar(15) not null,
nom varchar(15) not null,
Adresse varchar(20) not null,
ville varchar(20) not null,
PRIMARY KEY(idClient)
);

create table agent(
idAgent int not null auto_increment unique,
nom varchar(15) not null,
prenom varchar(15) not null,
primary key(idAgent)
);

create table visite(
code int not null,
idAgent int not null,
idClient int not null,
date DATE not null,
FOREIGN KEY (code) REFERENCES logement(code) on update cascade on delete cascade,
FOREIGN KEY (idAgent) REFERENCES agent(idAgent) on update cascade on delete cascade,
FOREIGN KEY (idClient) REFERENCES client(idClient) on update cascade on delete cascade
);

create table transaction(
code int not null,
idAgent int not null,
idClient int not null,
date Date not null,
commission float not null,
prix float not null,
primary key(code,idAgent,idClient,date),
FOREIGN KEY (code) REFERENCES logement(code) on update cascade on delete cascade,
FOREIGN KEY (idClient) REFERENCES client(idClient) on update cascade on delete cascade,
FOREIGN KEY (idAgent) REFERENCES agent(idAgent) on update cascade on delete cascade
);

INSERT INTO agent(nom,prenom) VALUES("JIANG","Senhao");
INSERT INTO agent(nom,prenom) VALUES("Robalo","Flavio");
INSERT INTO agent(nom,prenom) VALUES("MOUISSET","Yannis");
INSERT INTO client(prenom,nom,adresse,ville) VALUES ("","","","");


