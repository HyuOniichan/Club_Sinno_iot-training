const mqtt = require('mqtt');
const config = require('./config');

const { protocol, host, port, clientId, connectTimeout, username, password, reconnectPeriod } = config.mqtt; 
const connectUrl = `${protocol}://${host}:${port}`;
const topic = config.topics[0];


const client = mqtt.connect(connectUrl, {
    clientId, 
    clean: true, 
    connectTimeout, 
    username, 
    password,
    reconnectPeriod
})

client.on('connect', () => {
    console.log('Sub1 connected');
    client.subscribe([topic], () => {
        console.log(`Sub1 subscribed to topic '${topic}'`);
    })
}); 

client.on('message', (topic, payload) => {
    console.log(`Sub1 received message: ${payload.toString()} (topic: ${topic})`);
})
