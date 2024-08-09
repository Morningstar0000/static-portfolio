import { Box, Button, Flex, Text } from "@radix-ui/themes";
import React from "react";
import Testimonialcard from "../components/Testimonialcard";
import { Carousel } from 'react-bootstrap';
import { motion } from "framer-motion"
import { container } from "./Hero";
import "bootstrap/dist/css/bootstrap.min.css";

const cardetails = [
  {
    name: "Halland wahle",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam voluptas tempore maiores reiciendis accusamus impedit sapiente dolorum assumenda saepe facilis?",
    profession: "Software engineer",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW58ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "John don",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam voluptas tempore maiores reiciendis accusamus impedit sapiente dolorum assumenda saepe facilis?",
    profession: "sales marketer",
    image:
      "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop",
  },
  {
    name: "Becky Rose",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam voluptas tempore maiores reiciendis accusamus impedit sapiente dolorum assumenda saepe facilis?",
    profession: "UI/UX designer",
    image:
      "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVufGVufDB8fDB8fHww",
  },
  {
    name: "Justin Moses",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam voluptas tempore maiores reiciendis accusamus impedit sapiente dolorum assumenda saepe facilis?",
    profession: "Engineer",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww",
  },
];

function Testimonial() {

  return (
    <>
      <div
        className="Testimonial-section">
        <Flex gap="9" justify="between" className="TSTbox">
          <motion.div
            className="TST-content">
            <Button color="gray" variant="soft">Testimonial</Button> <br />
            <Text mt="8" as="h3" style={{ fontFamily: "sans-serif", fontSize: "33px", fontWeight: "bolder",  }}>
              What clients say about my portfolio template
            </Text>
          </motion.div>
          <motion.div
            variants={container}
            initial={container.hidden}
            whileInView={container.show}
          >
            <Box mt="8" className="Carousel" >
              <Carousel>
                {cardetails.map((detail, index) => (
                  <Carousel.Item key={index}>
                    <Testimonialcard detail={detail} />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Box>
          </motion.div>
        </Flex>
      </div>
    </>
  );
}

export default Testimonial;
