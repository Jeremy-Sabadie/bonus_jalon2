 //Création de la base de données
//use bonusFilRouge

// Création de la collection Contracts
db.createCollection("Contracts")

// Création de la collection Users
db.createCollection("Users")

// Création de la collection UserContract
db.createCollection("UserContract")

// Schéma pour la collection Contracts
db.Contracts.insert({
    contractId: 1,
    contractName: "Nom du contrat",
    startDate: ISODate("2024-01-23T00:00:00Z"),
    endDate: ISODate("2024-12-31T23:59:59Z"),
    description: "Description du contrat"
})

// Schéma pour la collection Users
db.Users.insert({
    name: "Nom de l'utilisateur",
    email: "utilisateur@example.com",
    password: "motdepasse",
    prenom: "Prénom de l'utilisateur",
    tel: "123456789",
    role: "role de l'utilisateur",
    lastUpdate: new Date()
})

// Schéma pour la collection UserContract
db.UserContract.insert({
    refContract: 1,  // Fait référence à contractId dans Contracts
    userId: ObjectId("5d4b62b7f856f3133ccfe9a0")  // Fait référence à l'id de l'utilisateur dans Users
})

