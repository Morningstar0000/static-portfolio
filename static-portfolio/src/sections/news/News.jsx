import React, { useEffect, useState } from 'react';
import { Box, Button, Heading, Flex } from '@radix-ui/themes';
import './news.scss';
import Newsdesign from './Newsdesign';
import { motion } from 'framer-motion';
import { container } from '../Hero';





var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=9e68251f0278499caa68b15fb1732ac0';


function News() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data.articles);
    }
    console.log(data)

    return (
        <>
            <div>
                <Box className='news' id='news'>
                    <motion.div></motion.div>
                    <motion.div
                     variants={container}
                     initial={container.hidden}
                     whileInView={container.show}
                        className='news-button'>
                        <Button mb="7" color='purple' variant='soft'>News</Button>
                        <Heading mb="9" >Latest News</Heading>

                   
                        <Flex wrap='wrap' gap='4'  pb="9">
                            {data.slice(1, 4).map((news, index) => (
                                <Newsdesign news={news} key={index} />
                            ))}

                        </Flex>

                    
                    </motion.div>
                </Box>
            </div>
        </>
    );
};
export default News;