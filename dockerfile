# Usa una imagen base de Node.js para construir el frontend
FROM node:16-alpine AS build-stage

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias del frontend
RUN npm install

# Copia el resto del código del frontend
COPY . .

# Construye la aplicación Vue.js para producción
RUN npm run build

# Usa una imagen de Nginx para servir los archivos estáticos
FROM nginx:alpine

# Copia los archivos estáticos generados por el build
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expone el puerto 80 para acceder a la aplicación
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]