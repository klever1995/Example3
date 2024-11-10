
FROM node:14-slim

WORKDIR /app

COPY app.js .

EXPOSE 3000

CMD ["node", "app.js"]
