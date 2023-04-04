git pull origin main
sudo docker rm -f vms-front
sudo docker build -t vms-front .
sudo docker run -d --name vms-front --restart=always -p 3000:3000 -it vms-front