import React, { useState, useEffect } from 'react';
import { storage } from "../../firebase/Firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { Toaster, toast } from 'sonner';
import './styles.css';

function ImageUploader({ setImageName }) {
  const [lastUploadedImage, setLastUploadedImage] = useState(null);

  useEffect(() => {

    const imagesRef = ref(storage, 'images');
    listAll(imagesRef)
      .then((res) => {
        if (res.items.length === 0) {
          toast.info("No images found.", {
            position: "bottom-center",
            className: "toast-bottom-center",
          });
          return;
        }

        let latestImageRef = res.items[res.items.length - 1];
        toast.info("Retrieving image...", {
          position: "bottom-center",
          className: "toast-bottom-center",
        });

        getDownloadURL(latestImageRef)
          .then((url) => {
            setLastUploadedImage(url);
            let imageNameWithoutExtension = latestImageRef.name.split('.').slice(0, -1).join('.');
            imageNameWithoutExtension = imageNameWithoutExtension.replace(/ \(\d+\)$/, '');
            setImageName(imageNameWithoutExtension.toUpperCase());
          })
          .catch((error) => {
            console.error("Error downloading image:", error);
          });
      })
      .catch((error) => {
        console.error("Error listing images:", error);
      });
  }, []);

  return (
    <>
      <div className="imageUploaderContainer" style={{ marginLeft: "7%", borderRadius:"45px", width: "25vw", height: "54vh", background: lastUploadedImage ? '#90EE90' : '#6FC0DB', justifyContent: "center", alignItems: "center" }} >
        <div>
          {lastUploadedImage && (
            <img
              src={lastUploadedImage}
              style={{
                marginTop: "3.5vh",
                position: "relative",
                objectFit: 'cover',
                left: "1.4vw",
                justifyContent: "center",
                borderRadius:"30px",
                alignItems: "center",
                justifyItems: "center",
                width: "365px",
                height: "365px",
                marginBottom: '0vh'
              }}
              alt="404 No image"
            />
          )}
          <Toaster richColors />
        </div>
      </div>
    </>
  );
}

export default ImageUploader;

