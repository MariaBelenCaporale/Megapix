#!/bin/bash

# Actualizar el sistema
sudo apt update
sudo apt upgrade -y

# Instalar Node.js y npm
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalar Nginx
sudo apt install nginx -y

# Instalar el agente de CodeDeploy
sudo apt install ruby-full -y
sudo apt install wget -y
cd /home/ubuntu
wget https://aws-codedeploy-us-east-1.s3.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto

# Iniciar y habilitar los servicios
sudo systemctl start codedeploy-agent
sudo systemctl enable codedeploy-agent
sudo systemctl start nginx
sudo systemctl enable nginx

# Crear el directorio para la aplicación
sudo mkdir -p /var/www/html
sudo chown -R ubuntu:ubuntu /var/www/html

# Verificar instalaciones
node --version
npm --version
nginx -v

# usar este comando para copiar el archivo desde local al servidor:
# scp -i path_pem ./scripts/setup.sh ubuntu@DNSIPInstance:/home/ubuntu

# Dar permisos de ejecucion al archivo setup.sh en el servidor
# chmod +x ~/setup.sh

