FROM node:20-alpine
WORKDIR /app
COPY package.json yarn.lock* ./
COPY apps/backend/package.json ./apps/backend/package.json
RUN yarn install
COPY . .
RUN yarn workspace backend build
EXPOSE 3000
CMD ["yarn", "workspace", "backend", "start"]
