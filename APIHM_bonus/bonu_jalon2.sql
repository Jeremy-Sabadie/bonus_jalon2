 create table IF NOT EXISTS UserContract(
  refContract int(11),
  UserId bigint(20) unsigned,
  FOREIGN KEY (refContract) REFERENCES Contracts(ContractId),
  FOREIGN KEY (UserId) REFERENCES users(id)
 );  
 -- Je veux  créer une base de données Mongo db:
 Table Contracts: contractId  int(11), contractName string, StartDate date,EndDate date, Description string.
 Table users: name, email,password, prenom,tel,role,LastUpdate.
 Table UserContract:FK refContract reference ContractId,FK UserId. 

})