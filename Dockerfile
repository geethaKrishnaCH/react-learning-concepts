FROM node:16.20.0-alpine3.17
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY package.json . 
RUN npm install
COPY . .
ENV API_URL=https://my-api.com
EXPOSE 5173
# CMD ["npm", "run", "dev"]
ENTRYPOINT [ "npm", "run", "dev" ]

