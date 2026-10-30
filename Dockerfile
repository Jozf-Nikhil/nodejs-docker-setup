
# 1. Use Node.js 18 as the base image
FROM node:18-alpine

# 2. Set the working directory
WORKDIR /app

# 3. Copy package files
COPY package*.json ./

# 4. Install production dependencies
RUN npm install --omit=dev

# 5. Copy application source code
COPY . .

# 6. Document the application port
EXPOSE 3000

# 7. Start the application
CMD ["node", "server.js"]
