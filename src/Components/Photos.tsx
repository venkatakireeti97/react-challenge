import React, { useState, useEffect } from "react";
import PhotosList from "./PhotosList";
import classes from "./Photos.module.css";
import PhotoDetails from "./PhotoDetails.tsx";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import store from "./PhotosList";
import {useSelector} from "react-redux";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [value, setValue] = useState(0);
  const changephotos = useSelector(state => state.photos);


  useEffect(() => {
    const fetchData = async () => {
      const data = store.getState().photos;
      setPhotos(data);
      console.log(data)
    };
    fetchData();
  },[changephotos]);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleDelete = () => {
    const _photos = [...photos]
      const toDeletePhoto = photos.find(_photo => _photo.id === selectedPhoto?.id)
  toDeletePhoto.deleted = true
  setPhotos(_photos)
  setSelectedPhoto(null)
  }

  return (
    <div style={{ backgroundColor: "#fdfdfc" }}>
      <h1 style={{ marginLeft: "50px" }}>Photos</h1>
      <div style={{ display: "flex", justifyContent: "flex-start", marginLeft: "50px" }}>
        <Paper square>
          <Tabs
            value={value}
            textColor="primary"
            indicatorColor="primary"
            style={{ width: "700px" }}
            onChange={(event,newValue) => {
              setValue(newValue);
            }}
          >
            <Tab style={{ marginLeft: "12px" }} label="Recently Added" />
            <Tab label=" Favorited" />
          </Tabs>
        </Paper>
      </div>{console.log(value)}
      <div style={{ display: "flex", flex: "1", justifyContent: "flex-start" }} className={classes.photo}>
        <ul style={{ flex: "9" }}>
          {photos.filter(photo => (photo?.deleted ? false : (value === 1 ? photo.favorited : true))).map((photo) => (
            <li
              key={photo.filename}
              onClick={() => handlePhotoClick(photo)}
              style={{ cursor: "pointer", padding: "15px" }}>
              <img
                src={photo.url}
                alt={photo.alt}
                width="180px"
                height="180px"
                style={{ borderRadius: "10px" }}
              />
              <h3 style={{ fontFamily: "Roboto", fontSize: "15px", fontWeight: "bold" }}>{photo.filename}</h3>
              <h3 style={{ fontFamily: "Roboto", fontSize: "15px" }}>{(photo.sizeInBytes / 1000000).toFixed(2)} MB</h3>
            </li>
          ))}
        </ul>
        {selectedPhoto && (
          <div style={{ flex: "5", float: "right", display: "flex", marginLeft: "334px" }}>
            <PhotoDetails onDeleteClick={handleDelete} photo={selectedPhoto} photos={photos} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Photos;