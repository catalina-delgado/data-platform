FROM nginx:alpine

# Sitio estático plano (sin build step): se copian los archivos
# directamente al docroot de nginx.
COPY . /usr/share/nginx/html
