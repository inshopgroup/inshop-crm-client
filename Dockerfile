FROM node:9

WORKDIR /var/www

ADD . /var/www

RUN chown -R www-data:www-data /var/www
RUN usermod -u 1000 www-data
