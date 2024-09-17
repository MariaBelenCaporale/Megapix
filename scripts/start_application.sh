#!/bin/bash

# Definir variables
DOCUMENT_ROOT="/var/www/html/dist"
SERVER_NAME="_"
APP_NGINX_CONF="/etc/nginx/sites-available/react-app"
NGINX_TEMPLATE="/var/www/html/nginx_template.conf"

# Crear configuración de Nginx a partir de la plantilla
sed -e "s|DOCUMENT_ROOT|$DOCUMENT_ROOT|g" \
    -e "s|SERVER_NAME|$SERVER_NAME|g" \
    "$NGINX_TEMPLATE" | sudo tee "$APP_NGINX_CONF" > /dev/null

# Crear un enlace simbólico para habilitar la configuración
sudo ln -sf $APP_NGINX_CONF /etc/nginx/sites-enabled/

# Verificar la configuración de Nginx
sudo nginx -t

# Si la configuración es válida, reiniciar Nginx
if [ $? -eq 0 ]; then
    echo "Configuración de Nginx válida. Reiniciando Nginx..."
    sudo systemctl restart nginx
else
    echo "Error en la configuración de Nginx. Por favor, revisa el archivo de configuración."
    exit 1
fi