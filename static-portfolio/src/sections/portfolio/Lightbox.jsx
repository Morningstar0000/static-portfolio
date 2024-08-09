import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion"

function Lightbox({
  lightboxDisplay,
  clickedImg,
  hideLightBox,
  showNext,
  showPrev,
}) {

  useEffect(() => {
    // Function to prevent scrolling
    const preventScroll = (e) => {
      e.preventDefault();
    };

    // Add event listener to disable scrolling when the lightbox is displayed
    if (lightboxDisplay) {
      document.body.style.overflow = 'hidden'; // Hide overflow on the body
      window.addEventListener('touchmove', preventScroll, { passive: false }); // For touch devices
      window.addEventListener('mousewheel', preventScroll, { passive: false }); // For mousewheel scrolling
    } else {
      document.body.style.overflow = ''; // Restore overflow when lightbox is closed
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('mousewheel', preventScroll);
    }

    // Clean up function to remove event listeners when component unmounts
    return () => {
      document.body.style.overflow = ''; // Ensure overflow is restored if component unmounts while lightbox is displayed
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('mousewheel', preventScroll);
    };
  }, [lightboxDisplay]);
  return (
    <>
   
        {lightboxDisplay ? (
         
          <div className="lightbox">
            <button onClick={hideLightBox} className="closeButton">
              Close
            </button>
            <AnimatePresence>
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.4}}
              className="imgWrapper"
              style={{
                // display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "400px",
                minWidth: "60%",

              }}
            >


              <motion.img
               initial={{ x: 300, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               exit={{ x: -300, opacity: 0 }}
               transition={{ duration: 0.4}}
                className="lightbox-img "
                src={clickedImg}
                alt="bigger pic"
              ></motion.img>

            </motion.div>
            </AnimatePresence>
            {/* //previous button */}
            <div className="NavbtnLeft">
              <button onClick={(e) => showNext(e)} className="Navbutton">
                ⭢
              </button>
            </div>
            {/* //next button */}
            <div className="NavbtnRight">
              <button onClick={(e) => showPrev(e)} className="Navbutton">
                ⭠
              </button>
            </div>
          </div>
         
        ) : (
          ""
        )}
     
    </>
  );
}
export default Lightbox;
