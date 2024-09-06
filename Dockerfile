# Pull image node
FROM node:18-alpine

# Set workdir
WORKDIR /app

# Copy and install dependencies in package.json
COPY package.json .
RUN npm install

# Run serve
RUN npm i -g serve

# Copy and run npm run build
COPY . .
RUN npm run build

# Expose port of serve
EXPOSE 3000

# Execute serve
CMD [ "serve", "-s", "dist" ]
