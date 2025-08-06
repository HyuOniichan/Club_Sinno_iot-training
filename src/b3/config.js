const config = {
    mqtt: {
        protocol: 'mqtt', 
        host: 'localhost', 
        port: 1883, 
        clientId: `mqtt_${Math.random().toString(16).slice(3)}`,
        connectTimeout: 4000, 
        username: 'emqx',
        password: 'public',
        reconnectPeriod: 1000,
    }, 
    topics: [
        'sensor/distance'
    ]
}

module.exports = config;
