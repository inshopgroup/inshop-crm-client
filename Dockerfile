FROM node:9

WORKDIR /var/www
ADD . /var/www
RUN chown -R node:node /var/www

RUN npm install -g yarn

RUN cp .env.dist .env
RUN yarn install
RUN yarn run build

