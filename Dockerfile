FROM node:9

WORKDIR /var/www
ADD . /var/www

RUN cp .env.dist .env
RUN yarn install
RUN yarn run build

RUN chown -R www-data:www-data /var/www
