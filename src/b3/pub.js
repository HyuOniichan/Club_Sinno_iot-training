const mqtt = require('mqtt');
const config = require('./config');

const { protocol, host, port, clientId, connectTimeout, username, password, reconnectPeriod } = config.mqtt;
const connectUrl = `${protocol}://${host}:${port}`;
const topic = config.topics[0];
const message = 'Yo Bro';

// Establish MQTT connection
const client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout,
    username,
    password,
    reconnectPeriod,
})

client.on('connect', () => {
    console.log('Connected');
    
    // Publish a message every 5 seconds 
    setInterval(() => {
        client.publish(topic, message, { qos: 0, retain: false }, (error) => {
            if (error) {
                console.log('Publish error:', error);
            } else {
                console.log(`Message published to topic '${topic}': ${message}`);
            }
        });
    }, 5000);  
})
