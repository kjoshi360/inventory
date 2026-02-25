# POS + Advanced Inventory Management Monorepo

Modular monolith starter for a Point of Sale and advanced inventory management platform using:

- **Frontend:** Vite + React
- **Backend:** NestJS
- **Data:** PostgreSQL + PostGIS via Prisma
- **Messaging/Cache:** Kafka + Redis
- **Infra:** Docker Compose + Kubernetes manifests
- **Package manager:** Yarn workspaces

## Quick start

```bash
yarn install
yarn dev
```

## Apps

- `apps/frontend`: POS and inventory UI with blue/white slick design system
- `apps/backend`: NestJS modular monolith with modules:
  - Auth
  - POS
  - Inventory
  - Catalog
  - Purchasing
  - Reporting
  - Integrations (Kafka + Redis)

## Infra

- `docker-compose.yml` provisions postgres/postgis, redis, kafka, zookeeper, and backend/frontend runtime containers.
- `k8s/` includes base deployments/services/config for local cluster deployment.

## Prisma

- Schema: `prisma/schema.prisma`
- Migrations target PostgreSQL with PostGIS extension setup script.

## Scripts

```bash
yarn dev          # run frontend + backend concurrently
yarn build        # build all workspaces
yarn lint         # lint frontend/backend
yarn prisma:gen   # generate prisma client
yarn prisma:mig   # run development migration
```
