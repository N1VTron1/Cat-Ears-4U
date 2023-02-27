FROM node:18-alpine
WORKDIR /IST-412-FA22-Team-4
COPY . .
RUN yarn install --production
CMD ["node", "/IST-412-FA22-Team-4/index.js"]
EXPOSE 3000