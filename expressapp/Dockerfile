FROM mhart/alpine-node:12.18.0

EXPOSE 3000

RUN mkdir /src
COPY package.json /src
WORKDIR /src

RUN npm install

COPY . /src

CMD ["npm", "start"]