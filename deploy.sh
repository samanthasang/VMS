git pull origin main
docker build -t vms-front .
docker run --restart -d -p 3000:3000 -it vms-front