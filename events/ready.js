// When the client is ready, run this code (only once)
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        //Logged in
		console.log(`Ready! Logged in as ${client.user.tag}`);

        //Bot ping
        console.log(`Websocket heartbeat: ${client.ws.ping}ms.`);
	},
};