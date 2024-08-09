import { Box, Flex, Text, Heading, Button } from "@radix-ui/themes";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import React from "react";
import { motion } from "framer-motion";
import { container } from "./Hero";

function About() {

 
  return (
    <>
      <Box className="About" id="about">
        <motion.div
        variants={container}
           initial={container.hidden}
           whileInView={container.show}
        >
        <Flex gap="0" mx="9" className="aboutContent">
            <AspectRatio.Root ratio={16 / 9} >
              <img
                className="about-image"
                src="Aboutboy.jpg"
                alt="Aboutboy"
              />
            </AspectRatio.Root>
    
          <Box  className="content" asChild >
            <Flex direction='column' gap="4" >

            <Box><Button variant="soft"  className="gray"  >ABOUT ME</Button></Box>
            
            <Heading  size="7" weight="bold" style={{ fontFamily:"cursive"}}>
              Creative Independent Web Developer based in Africa.
            </Heading>
            <Text size="4" weight="light" as="p" mb="8" mt='4' >
              I'm web designer, and I'm very passionate and dedicated to my
              work. With 20 years experience as a professional web developer, I
              have acquired the skills and knowledge necessary to make your
              project a success. I enjoy every step of the design process, from
              discussion and collaboration.
            </Text>
            <Box>
            <Button className="button-download" pt="9">Download CV</Button>
            </Box>
          
            </Flex>
          </Box>
        </Flex>
        </motion.div>
      </Box>
    </>
  );
}
export default About;