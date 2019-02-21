FROM node:9

WORKDIR /var/www
ADD . /var/www

RUN npm install -g yarn

RUN cp .env.dist .env
RUN yarn install
RUN yarn run build

RUN chown -R www-data:www-data /var/www
RUN rm -rf /var/www/node_modules
