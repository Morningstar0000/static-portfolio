import { Box, Text } from '@radix-ui/themes';
import React from 'react';
import Contactmodal from '../components/Contactmodal';
import { motion } from 'framer-motion';
import { container } from './Hero';


function Contact() {



    return (
        <div>
            <Box className="contactSection" id='contact'>
                <motion.div
                    variants={container}
                    initial={container.hidden}
                    whileInView={container.show}
                    className='Contactcontent'>
                    <div style={{ color: "white", textAlign: "center", }} >
                        <Text as='h1' weight="bold" align="center" className="Textcontact">Let's work together! </Text>
                    </div>

                    <Contactmodal />
                </motion.div>
            </Box>
        </div>
    )
}

export default Contact;
