// import { Box, Flex, Grid } from "@radix-ui/themes";
import React, { useState } from "react";
import { Images } from "./Images";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { motion } from "framer-motion";


function PortProduct({ item }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const [open, setOpen] = useState(false);

  // Function to handle image click
  const handleImageClick = (index) => {
    setOpen(true);
    setSelectedImageIndex(index);
  };

  return (

    <div style={{ marginTop: "20px" }}>
      <div className="gridPorfolio" >
        {item.slice(0, 6).map((image, index) => (
          <motion.div
           layout
          key={image.id}
            className="img-wrapper"
            initial={{ opacity: 0,  scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              layout: { duration: 0.3, ease: "linear" }
            }}
          >
            <img
              src={image.src}
              alt=""
              className="images"
              onClick={() => handleImageClick(index)}
            />
            <div className="imgContent">
              <h3>{image.category}</h3>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Lightbox */}
      <Lightbox
        plugins={[Download, Fullscreen, Zoom, Thumbnails]}
        index={selectedImageIndex}
        slides={Images}
        captions={{
          showToggle: true,
          descriptionTextAlign: 'end',
        }}
        open={open}
        close={() => setOpen(false)}

      />
    </div>

  );
}

export default PortProduct;


{/* <AnimatePresence>
<Lightbox
lightboxDisplay={lightboxDisplay}
  clickedImg={clickedImg}
  setClickedImg={setClickedImg}
  showNext={showNext}
  showPrev={showPrev}
  hideLightBox={hideLightBox}
/>
</AnimatePresence> */}

// const [index, setIndex] = useState(-1);

// const [lightboxDisplay, setLightBoxDisplay] = useState(false);
// const handleClick = (item, index) => {
//   setCurrentIndex(index);
//   setClickedImg(item.Url);
//   setLightBoxDisplay(true)
// };

// // Hidelightbox
// const hideLightBox = () => {
//   setLightBoxDisplay(false);
// };
// // shownext
// const showNext = () => {
//   const totalLength = Images.length;
//   if (currentIndex + 1 >= totalLength) {
//     setCurrentIndex(0);
//     const newUrl = Images[0].Url;
//     setClickedImg(newUrl);
//     return;
//   }
//   const newIndex = currentIndex + 1;
//   const newUrl = Images.filter((item) => {
//     return Images.indexOf(item) === newIndex;
//   });
//   const newItem = newUrl[0].Url;
//   setClickedImg(newItem);
//   setCurrentIndex(newIndex);
// };
// // showPrev
// const showPrev = () => {
//   const totalLength = Images.length;
//   if (currentIndex === 0) {
//     setCurrentIndex(totalLength - 1);
//     const newUrl = Images[totalLength - 1].Url;
//     setClickedImg(newUrl);
//     return;
//   }
//   const newIndex = currentIndex - 1;
//   const newUrl = Images.filter((item) => {
//     return Images.indexOf(item) === newIndex;
//   });
//   const newItem = newUrl[0].Url;
//   setClickedImg(newItem);
//   setCurrentIndex(newIndex);
// };