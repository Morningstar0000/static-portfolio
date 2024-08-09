import React from "react";
import "./news.scss";
import { Box, Text } from "@radix-ui/themes";

import Newsdetails from "./Newsdetails";



function Newsdesign( { news }) {
    return (
        <>
            <Box >
                <Box className="news-design">
                    <img
                        src={news.urlToImage }
                        alt="News"
                        className="news-image"
                    />

                    <Box mx="2" mt="6" >
                          <Newsdetails news={news}/>
                          <Text as="h6" mt="5" color="gray" >Author: {news.author}</Text>
                        <Text as="p" > {news.publishedAt}</Text>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
export default Newsdesign;
