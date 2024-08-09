import React from 'react';
import { Box, Text, Flex, Strong } from '@radix-ui/themes';
import "./Progressbar.scss"



function ProgressBar( { languages,  completed}) {

    return (
        <>
            <div >
                <Flex  justify="between">
                    <Text as='label' weight="medium">{languages}</Text>
                    <Text as='label'><Strong>{completed}%</Strong></Text>
                </Flex>

                <Box className="ProgressRoot">
                    <Box className="ProgressIndicator"
                        style={{ transform: `translateX(-${100 - completed}%)` }}
                    >

                    </Box>
                </Box>
            </div>
        </>
    );
};

export default ProgressBar;