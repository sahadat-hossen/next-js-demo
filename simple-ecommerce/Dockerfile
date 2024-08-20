# Step 1: Build the Next.js app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Step 2: Run the Next.js app
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Copy the build output from the builder stage
COPY --from=builder /app ./

# Expose the port that the app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
