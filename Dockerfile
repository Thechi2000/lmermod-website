FROM arm64/node:19-bullseye

WORKDIR /usr/src/website
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]