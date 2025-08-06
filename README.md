<h1 align="center">IoT Background Service Training</h1>

## Table of Contents  

- [Table of Contents](#table-of-contents)
- [Meetings](#meetings)
  - [Buoi 1 (27/7/2025)](#buoi-1-2772025)
    - [Tasks](#tasks)
    - [Files](#files)
  - [Buoi 2 (30/7/2025)](#buoi-2-3072025)
    - [Tasks](#tasks-1)
    - [Files](#files-1)
  - [Buoi 3 (5/8/2025)](#buoi-3-582025)
    - [Tasks](#tasks-2)
    - [Files](#files-2)
    - [Devices](#devices)
- [Tai lieu lien quan](#tai-lieu-lien-quan)


<a name="meetings"></a>

## Meetings

<a name="b1"></a>

### Buoi 1 (27/7/2025)  

#### Tasks

1. Cài đặt EMQX Broker trên Docker  
`docker run -d --name emqx -p 1883:1883 -p 8083:8083 -p 8084:8084 -p 8883:8883 -p 18083:18083  emqx:5.8.5`
2. Tìm hiểu MQTT 

#### Files 

- Path: `src/b1/`
- `main.js` 
  - Setup MQTT params 
  - Establish MQTT connection
  - Subcribe, Publish and Disconnect 


<a name="b2"></a>>

### Buoi 2 (30/7/2025)  

#### Tasks

1. Nắm rõ được cách hoạt động của MQTT, hiểu được broker, topic, publisher và subcriber là gì?
2. Tìm hiểu thêm về QoS trong MQTT
3. Assignment chúng ta sẽ như sau:  
   - Yêu cầu cơ bản: code giả lập 1 publisher và 2 subcriber để chạy thử trên cùng 1 máy, các em có thể quan sát trạng thái kết nối của các client trên địa chỉ localhost:18083 khi chạy EMQX bằng Docker.  
   - Yêu cầu nâng cao: 1 publisher và 1 subcriber ở 2 máy vật lý khác nhau có thể bắn và lắng nghe tin nhắn được, việc này yêu cầu máy tính của subcriber phải biết được IP của máy tính chạy EMQX Broker và port 1883 phải được mở, các em sẽ thiết lập inbound và outbound rule trên máy chứa broker.

#### Files

- Path: `src/b2/`
- `config.js` - MQTT params 
- `pub1.js` - Publisher 1
- `sub1.js` - Subcriber 1 
- `sub2.js` - Subcriber 2 


<a name="b3"></a>

### Buoi 3 (5/8/2025) 

#### Tasks 

1. Tìm hiểu về Background Service, hiểu được sự khác nhau giữa Background Service và Web API là như nào ?
2. Từ assignment anh giao hôm trước, chúng mình sẽ nâng cấp lên:
  - Publisher của chúng ta là 1 cảm biến nhiệt độ, cảm biến này sẽ bắn bản tin chứa nhiệt độ lên 1s/lần
  - Subcriber của chúng ta là 1 bg service xử lý thông tin cảm biến bắn qua topic, nếu nhiệt độ vượt quá mức cho phép VD như 36 độ C chẳng hạn, sẽ hiển thị lên màn hình console tbao

#### Files

- Path: `src/b3/`
- `config.js` - MQTT params
- `pub.js` - Publisher (Testing purpose) 
- `background-service.js` - Subcriber (work as background service) 
- `distance-sensor.ino` - Logic for ESP32 handle calculating and publishing distance
- `config-sample.h` - Template for `config.h`, includes WiFi and MQTT setup

#### Devices 
- ESP32 Devkit V1 
- Ultrasonic Distance Sensor HC-SR04




<a name="resource"></a>

## Tai lieu lien quan  
- Thong tin du an: [Google Docs](https://docs.google.com/document/d/11dvZJWpjWVFPlbXF0WgX3hBHGRbl80fCsNnWCCyS8T0/edit?usp=sharing)
- MQTT with Node.js: [Tutorial Blog](https://www.emqx.com/en/blog/how-to-use-mqtt-in-nodejs)
- MQTT Temperature example: [Github Repo](https://github.com/gabrielboliveira/mqtt-temperature)

