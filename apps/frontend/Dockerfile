FROM node:20-alpine
WORKDIR /app
COPY package.json yarn.lock* ./
COPY apps/frontend/package.json ./apps/frontend/package.json
RUN yarn install
COPY . .
EXPOSE 5173
CMD ["yarn", "workspace", "frontend", "dev", "--host", "0.0.0.0", "--port", "5173"]
