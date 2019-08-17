FROM alpine:3.8
ENV NODE_VERSION 8.12.0
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

# Stage 2 - the production environment
FROM nginx:alpine
#COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

#MAINTAINER Koldo Hernández <info@koldohernandez.com>
#RUN apt-get update && apt-get install -y git
#RUN sudo mkdir carpeta_prueba
