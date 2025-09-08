# Creating BASE-Image UBUNTU.24.04 ~28MB
FROM mcr.microsoft.com/playwright:v1.47.1-jammy

# Copy for dependency installation
WORKDIR /app
COPY package*.json ./

# Install Project Dependencies
RUN npm ci

# Copy project
COPY . .

# Install Chromium Browser wiht playwright
RUN npx playwright install chromium

