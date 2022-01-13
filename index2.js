const logger = require("logplease");
const pantumaca = logger.create("utils");

pantumaca.debug("Hola mundo de NODE");
pantumaca.info(`Noticias de última hora, Node.js me encanta!! `);
pantumaca.warn(`Tirando warnings como campeones`);
pantumaca.error(`Algo no está bien!!!`);
