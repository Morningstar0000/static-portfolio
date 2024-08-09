import { Box, Card, Text, Flex, Avatar } from "@radix-ui/themes";
import React from "react";




  function Testimonialcard({ detail, index }) {
    return (
      <>
          <Box  mb="3">
            <Card size="2" key={index } style={{ maxWidth: 800 }}>
              <Box ml="5">
                <Text as="p" mb="6" mt="2" size="3" weight="light">
                  {detail.description}
                </Text>
                <Flex gap="3" align="center">
                  <Avatar
                    size="5"
                    src={detail.image}
                    radius="full"
                    fallback="T"
                  />
                  <Box>
                    <Text as="div" size="5" weight="bold">
                      {detail.name}
                    </Text>
                    <Text as="div" size="2" color="gray" weight="bold">
                      {detail.profession}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Card>
          </Box>
     
      </>
    );
  }
  
  export default Testimonialcard;