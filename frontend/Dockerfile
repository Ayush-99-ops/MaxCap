# Build Stage for React
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production Serving Stage with Nginx
FROM nginx:alpine
# Copy the built React app to Nginx's web root
COPY --from=builder /app/dist /usr/share/nginx/html
# Copy custom Nginx configuration if needed (default is fine for basic SPAs, but we need fallback for React Router)
RUN echo 'server { listen 80; location / { root /usr/share/nginx/html; index index.html; try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
