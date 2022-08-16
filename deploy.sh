git pull origin main
docker build -t vms-front .
docker run -d --restart=always -p 3000:3000 -it vms-front
