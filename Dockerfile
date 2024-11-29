# Usar la imagen de Node.js para construir la aplicación
FROM node:22 as build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar todo el código de la aplicación
COPY . .

# Compilar la aplicación de React
RUN npm run build

# Usa una imagen ligera de Nginx para servir la aplicación
FROM nginx:alpine

# Copiar los archivos compilados de la aplicación al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar la configuracion agregando try_files para evitar el error 404 en /turistas y /*
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80 para que Nginx pueda servir la aplicación en ese puerto
EXPOSE 80

# Arrancar el servidor de Nginx
CMD ["nginx", "-g", "daemon off;"]