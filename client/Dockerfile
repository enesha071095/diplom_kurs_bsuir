# pull official base image
FROM node:14.17.3-alpine3.14

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
RUN yarn

# add app
COPY . ./

EXPOSE 3001

# start app
CMD ["yarn", "start"]
