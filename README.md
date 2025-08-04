<h1 align="center">IoT Background Service Training</h1>

# Tai lieu lien quan  
- Thong tin du an: [Google Docs](https://docs.google.com/document/d/11dvZJWpjWVFPlbXF0WgX3hBHGRbl80fCsNnWCCyS8T0/edit?usp=sharing)



# Buoi 1 (27/7/2025)  

1. Cài đặt EMQX Broker trên Docker  
`docker run -d --name emqx -p 1883:1883 -p 8083:8083 -p 8084:8084 -p 8883:8883 -p 18083:18083  emqx:5.8.5`
2. Tìm hiểu MQTT 



# Buoi 2 (30/7/2025)  

1. Nắm rõ được cách hoạt động của MQTT, hiểu được broker, topic, publisher và subcriber là gì?
2. Tìm hiểu thêm về QoS trong MQTT
3. Assignment chúng ta sẽ như sau:  
   - Yêu cầu cơ bản: code giả lập 1 publisher và 2 subcriber để chạy thử trên cùng 1 máy, các em có thể quan sát trạng thái kết nối của các client trên địa chỉ localhost:18083 khi chạy EMQX bằng Docker.  
   - Yêu cầu nâng cao: 1 publisher và 1 subcriber ở 2 máy vật lý khác nhau có thể bắn và lắng nghe tin nhắn được, việc này yêu cầu máy tính của subcriber phải biết được IP của máy tính chạy EMQX Broker và port 1883 phải được mở, các em sẽ thiết lập inbound và outbound rule trên máy chứa broker.
