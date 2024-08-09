import React from "react";

import { Box, Flex, Text, Heading } from "@radix-ui/themes";
import ProgressBar from "../components/progressbar/Progressbar";
import { motion } from "framer-motion"
// import { container } from "./Hero";

const Skills = [
  { completed: 80, languages: "React" },
  { completed: 70, languages: "HTML" },
  { completed: 65, languages: "CSS" },
];

function Features() {
  return (
    <>
      <Box className="Features" id="features">
        <motion.div 
        // variants={container}
        // initial={container.hidden}
        // whileInView={container.show}
        className="featureBox">
            <Flex direction="column" gap="4" px="9"  className="feature-content" >
              <Heading
                weight="bold"
                style={{ fontSize: "28px", fontFamily: "monospace" }}
              >
                I have high skills in developing and programming.
              </Heading>
              <Text size="3" weight="medium" as="p" mb="8" mt="4" color="gray">
                I am working on a professional, visually sophisticated and
                technologically proficient, responsive and multi-functional
                personal portfolio template Morningstar.
              </Text>
            </Flex>
    
          <Flex direction="column"  gap="7" justify="center" className='progressBar'>
            {Skills.map((s, idx) => (
              <ProgressBar
                key={idx}
                completed={s.completed}
                languages={s.languages}
              />
            ))}
          </Flex>
        </motion.div>
      </Box>
    </>
  );
}

export default Features;
