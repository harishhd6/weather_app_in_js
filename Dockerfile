# Use a lightweight, official Nginx image as a base
FROM nginx:alpine

# Set the working directory to the Nginx document root
WORKDIR /usr/share/nginx/html

# Copy all files to the working directory
COPY . .

# Expose the port that your app will run on
EXPOSE 80

# Command to start Nginx and serve the application
CMD ["nginx", "-g", "daemon off;"]

