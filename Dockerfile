FROM node:6.9.2
MAINTAINER Martin Stiborský <martin.stiborsky@gmail.com>

RUN mkdir /opt/hello-world
WORKDIR /opt/hello-world

ADD . /opt/hello-world

RUN npm install -g gulp && npm install && gulp build

CMD ["node", "dist/app.js"]
