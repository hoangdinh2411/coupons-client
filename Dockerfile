
## 1) BUILDER STAGE## 
FROM node:22-alpine
WORKDIR /app

#install dependencies
COPY package*.json ./
RUN npm install 
COPY . . 

# Copy only what’s needed at runtime
COPY . .

ENV NODE_ENV=development
#expose and run
EXPOSE 3000
CMD ["npm","run","dev"]