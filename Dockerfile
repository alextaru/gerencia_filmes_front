FROM node:10.13-alpine as gerencia-filmes-front
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=gerencia-filmes-front  app/dist/gerenciaFilmesFront /usr/share/nginx/html
COPY ./config/nginx.conf /etc/ngix/conf.d/default.conf
