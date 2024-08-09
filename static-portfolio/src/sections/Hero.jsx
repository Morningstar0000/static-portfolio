import { Box, Flex, Text, Heading, Grid, Em } from '@radix-ui/themes'
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import React from 'react'
import Navbar from '../components/Navbar';
import { motion } from "framer-motion"
import { useMediaQuery } from 'react-responsive';
import { ReactTyped } from "react-typed";


export const container = {
    hidden: { opacity: 0, },
    show: {
        opacity: 1,

        transition: {
            ease: "easeOut",
            duration: 0.6,
            delay: 0.6
        }
    }
}

function Hero() {
    const isLaptop = useMediaQuery({ query: '(max-width: 1023px)' });

    return (
        <div>
            <Box id='/' className='Hero-section'

            >
                <div className='navbar-bg'>
                    <Navbar />
                </div>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={isLaptop ? "show" : "hidden"}
                    whileInView={!isLaptop ? "show" : ""}
                    style={{ backgroundColor:"whitesmoke"}}
                >
                    <Grid columns="2" gap="3" width="auto" >
                        <Box className='left-side' mx="7" >
                            <Heading className='heading' as='h1' mb="5" >MORNINGSTAR</Heading>
                            <Text as='p' size="5" weight="bold" ml="8" className='text' >
                               <Em> Independent Web{" "}
                                <ReactTyped
                                    strings={[" Developer", "Designer"]}
                                    typeSpeed={100}
                                    loop
                                    backSpeed={20}
                                    // cursorChar=">"
                                    showCursor={true}
                                />
                                </Em>
                            </Text>

                        </Box>

                        <Box className='right-side'>
                            <AspectRatio.Root ratio={1 / 1}  >
                                <img
                                    className="Hero-image"
                                    src="purplewoman.png"
                                    alt="sarapurple"

                                />
                            </AspectRatio.Root>
                        </Box>

                    </Grid>
                </motion.div>
            </Box>
        </div>
    )
}

export default Hero
