const logger = require("logplease");
const pantumaca = logger.create("utils");
let par = require("./numeros");

pantumaca.log(par.par(2));
pantumaca.log(par.par(3));
pantumaca.log(par.par(101));
pantumaca.log(par.par(201));
pantumaca.log(par.par(202));
pantumaca.log(par.par(100));