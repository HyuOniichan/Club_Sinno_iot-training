const mqtt = require('mqtt'); 

// Set up MQTT connection params 
const protocol = 'mqtt'; 
const host = 'localhost'; // Change to your MQTT broker address
const port = 1883; 
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

const connectUrl = `${protocol}://${host}:${port}`; 


// Establish MQTT connection
const client = mqtt.connect(connectUrl, {
    clientId, 
    clean: true, 
    connectTimeout: 4000, 
    username: 'emqx',
    password: 'public',
    reconnectPeriod: 1000,
})

client.on('connect', () => {
    console.log('Connected'); 
})


// Subscribe to a topic 

const topic = '/mqtt/node'

client.on('connect', () => {
    console.log('Connected to topic')
    client.subscribe([topic], () => {
        console.log(`Subscribe to topic '${topic}'`)
    })
})

client.on('message', (topic, payload) => {
    console.log(`Received message: ${payload.toString()} on topic: ${topic}`);
})


// Publish a message to the topic

client.on('connect', () => {
    console.log('Connected to topic for publishing'); 
    client.publish(topic, 'Hello World', { qos: 0, retain: false}, (error) => {
        if (error) console.log('Publish error:', error);
    })
})


// Disconnect MQTT connection

// client.end((error) => {
//     if (error) console.log('Disconnect error:', error);
//     else console.log('Disconnected successfully');
// })

