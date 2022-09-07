const server = require('./src/config/express');
const { port, timeout } = require('./src/config/vars').server;

server.listen(port, () => console.info(`server started on port ${port}`)).setTimeout(timeout);

module.exports = server;