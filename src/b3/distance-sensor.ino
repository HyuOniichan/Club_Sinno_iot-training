// distance sensor + MQTT 

#include <WiFi.h> 
#include <PubSubClient.h> 
#include "config.h"

const int trig = 12; 
const int echo = 13; 

WiFiClient espClient;
PubSubClient client(espClient);

unsigned long lastPublish = 0;
const unsigned long publishInterval = 2000;

void setup() {
  pinMode(trig, OUTPUT); 
  pinMode(echo, INPUT); 

  Serial.begin(115200); 

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD); 

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000); 
    Serial.println("Connecting to WiFi...");
  }

  client.setServer(MQTT_SERVER_IP, MQTT_SERVER_PORT); 
  client.setCallback(callback); 

  while (!client.connected()) {
    if (client.connect(MQTT_CLIENT_ID, MQTT_USERNAME, MQTT_PASSWORD)) {
        Serial.println("Public EMQX MQTT broker connected");
    } else {
        Serial.println("Connection failed with state ");
        Serial.print(client.state());
        delay(2000);
    }
  }

  client.publish(MQTT_SENSOR_DISTANCE_TOPIC, "Hi, I'm ESP32 ^^");
  client.subscribe(MQTT_SENSOR_DISTANCE_TOPIC);

}

void loop() {
  client.loop(); 

  unsigned long currentMillis = millis();
  if (currentMillis - lastPublish >= publishInterval) {
    lastPublish = currentMillis;

    unsigned long duration; 
    unsigned long distance; 

    digitalWrite(trig, 0); 
    delayMicroseconds(2); 
    digitalWrite(trig, 1); 
    delayMicroseconds(5); // 5ms wave 
    digitalWrite(trig, 0); 

    duration = pulseIn(echo, HIGH); 
    distance = int(duration / 2 / 29.412); 

    Serial.print(distance);
    Serial.println("cm");

    // Convert to string
    char msg[10];
    sprintf(msg, "%ld", distance);

    client.publish(MQTT_SENSOR_DISTANCE_TOPIC, msg);
  }

}

void callback(char *topic, byte *payload, unsigned int length) {
    Serial.print("Message arrived in topic: ");
    Serial.println(topic);
    Serial.print("Message:");
    for (int i = 0; i < length; i++) {
        Serial.print((char) payload[i]);
    }
    Serial.println();
    Serial.println("-----------------------");
}











