import axios from "axios";
const { configureStore } = require('@reduxjs/toolkit');

// Define the action creator
const setPhotos = (photos) => ({
  type: "SET_PHOTOS",
  payload: photos,
});

// Dispatch the action to update the photos state

// Update the reducer to handle the SET_PHOTOS action
const initialState = {
  photos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case "SET_PHOTOS":
      return {
        ...state,
        photos: action.payload,
      };
      case "Fav":
        console.log(state,action.flag)
        let result = state.photos
        result = result.map((item)=>{
          if(item.id === action.flag)
            return {...item,favorited: !item.favorited}
          else
            return item
        })
        console.log(result)
        return {
          ...state,
          photos: result,
        };
      default:
        return state;
      }
    };
    const call = async()=>{
      return await axios.get("https://agencyanalytics-api.vercel.app/images.json");
    }
    
    const store = configureStore({ reducer });
    (async () => {
      const photos = await call();
      store.dispatch(setPhotos(photos.data));
      console.log(store.getState());
    })();

    function handleStoreUpdate() {
      const photos = store.getState().photos;
      console.log("New photos state:", photos);
    }
    store.subscribe(handleStoreUpdate);

    export default store