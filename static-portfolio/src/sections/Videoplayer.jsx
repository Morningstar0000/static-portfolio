import { Box, Button, Text } from '@radix-ui/themes';
import React, { } from 'react';
import "../style/videoplayer.scss"


import { Dialog, DialogTrigger, DialogContent, DialogOverlay, DialogClose } from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import ReactPlayer from 'react-player'



function Videoplayer() {


    return (
        <>
            <Box className='section-container'>
                
                <video className="video-background" autoPlay loop muted>
                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
                <Box className='videocontent'>
                    <div style={{ maxWidth: "500px", color:"white" }}>
                        <Text as='h2' weight="bold" align="center"  >I always deliver beautiful digital products for my clients </Text>
                    </div>

                    <Dialog>
                        <DialogTrigger asChild>
                            <button  className='watchvideo'>Watch Video</button>
                        </DialogTrigger>
                        <DialogOverlay className='DialogOverlay' />
                        <DialogContent className='DialogContent'  >
                            <ReactPlayer
                                width="1000"
                                light
                                url="https://youtu.be/__bHXkW3VMw"
                                controls={true}
                                playing={true}

                            >

                            </ReactPlayer>
                            <DialogClose asChild>
                                <button className="IconButton" aria-label="Close">
                                    <Cross2Icon width="90" />
                                </button>
                            </DialogClose>
                        </DialogContent>

                    </Dialog>

                </Box>
            </Box>
        </>
    )
}

export default Videoplayer;


