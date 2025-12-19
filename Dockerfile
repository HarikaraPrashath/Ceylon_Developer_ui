FROM node:18-alpine

ENV NODE_ENV=development \
    NEXT_TELEMETRY_DISABLED=1

WORKDIR /app

# Only copy manifests so Docker layer is tiny
COPY package*.json ./

EXPOSE 3000

# Install deps at container start (into the volume), then run dev
CMD ["sh", "-c", "npm install && npm run dev"]
# if you use yarn:
# CMD ["sh", "-c", "yarn install && yarn dev"]
