FROM alpine:3.8
RUN apk update && apk upgrade
RUN apk add npm
RUN rm -rf /var/cache/apk/*

COPY . /src
WORKDIR /src

ENV PATH /src/node_modules/.bin:$PATH

RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

# start app
CMD ["npm", "start"]
