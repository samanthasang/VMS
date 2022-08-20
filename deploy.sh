git pull origin main
sudo docker build -t vms-front .
sudo docker run -d --restart=always -p 3000:3000 -it vms-front
