FROM inshopgroup/docker-inshop-crm-client-nginx-dev:latest

WORKDIR /var/www
ADD . /var/www

RUN cp .env.dist .env
RUN yarn install
RUN yarn run build

RUN chown -R www-data:www-data /var/www
