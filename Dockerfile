FROM node:17.4.0
WORKDIR /src
COPY . .
RUN npm install 
RUN npm install parcel --save-dev
RUN npm install react-redux
RUN npm i @reduxjs/toolkit
CMD ["npm", "start"]
