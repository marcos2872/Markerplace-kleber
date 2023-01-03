const { v4: uuidv4, v4 } = require('uuid');

const createId = () => uuidv4();

module.exports = createId;