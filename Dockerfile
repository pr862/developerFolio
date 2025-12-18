# ===============================
# STEP 1: Build React application
# ===============================
FROM node:18 AS build

WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Build production-ready files
RUN npm run build


# ===============================
# STEP 2: Serve using NGINX
# ===============================
FROM nginx:alpine

# Copy build output to NGINX folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose web port
EXPOSE 80

# Run NGINX in foreground
CMD ["nginx", "-g", "daemon off;"]

