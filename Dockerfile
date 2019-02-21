FROM node:9

WORKDIR /var/www
ADD . /var/www

RUN cp .env.dist .env
RUN npm install
RUN npm run build

RUN chown -R www-data:www-data /var/www
