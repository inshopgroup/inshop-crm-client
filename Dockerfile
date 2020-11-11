FROM node:10

WORKDIR /var/www
ADD . /var/www

RUN cp .env.dist .env
RUN npm install
RUN npm run build

RUN chown -R node:node /var/www
