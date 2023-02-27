# photoGallery

## To Run

`npm install parcel --save-dec`

`npm run or npm start`

main file is app.tsx which is rendered in index.tsx
App.tsx file has photos rendered in it.

the main components are 1)Photos.tsx
2)PhotoDetails.tsx
3)PhotosList.tsx
and the css module file name is Photos.module.css
1)Photos.tsx is main component which take details from PhotoDetails.tsx and renders it.
2)PhotoDetails.tsx gives all the details of photo from the PhotoList.tsx and gives it to main component.
3)PhotoList.tsx fetches the api using axios library which used for fetching api from the server.


## Deployed to AWS

Access http://3.210.204.77:8080/ to view the application deployed to the cloud(AWS).