# Creating BASE-Image with latest Microsoft Playwright Image (1.54.2)
FROM mcr.microsoft.com/playwright:v1.54.2-jammy

# Copy for dependency installation
WORKDIR /app
COPY package*.json ./

# Install Project Dependencies
RUN npm ci

# Copy project
COPY . .

# Install Chromium Browser wiht playwright (Already in IMAGE)
# RUN npx playwright install chromium

