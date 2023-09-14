#It will use node:19-alpine3.16 as the parent image for building the Docker image
FROM node:19-alpine3.16

#It will create a working directory for Docker. The Docker image will be created in this working directory.
WORKDIR /next-app

#Copy the Next.js application dependencies from the package.json to the nextjs-app working directory.
COPY package.json .

COPY package-lock.json .

#install all the Next.js application dependencies
RUN npm i

#Copy the remaining Next.js application folders and files from the `generate_cv` local folder to the Docker nextjs-app working directory -->
COPY . .

#Expose the Next.js application container on port 3000
EXPOSE 3000

#The command to start the Next.js application container
CMD ["npm", "run", "dev"]  