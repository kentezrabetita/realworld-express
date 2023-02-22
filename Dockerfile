# Set the base image to use for this Dockerfile
FROM node:16

# Set environment variables from build arguments
ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

ARG DB_HOST
ENV DB_HOST=${DB_HOST}

ARG DB_NAME
ENV DB_NAME=${DB_NAME}

ARG DB_USER
ENV DB_USER=${DB_USER}

ARG DB_PASSWORD
ENV DB_PASSWORD=${DB_PASSWORD}

ARG JWT_SECRET
ENV JWT_SECRET=${JWT_SECRET}

ARG PORT
ENV PORT=${PORT}

# Set the working directory for the application
WORKDIR /app

# Copy the application source code into the image
COPY . .

# Install dependencies
RUN npm install

# Expose the port on which the application will listen
EXPOSE ${PORT}

# Start the application
CMD ["npm", "start"]