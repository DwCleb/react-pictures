import React from 'react';
import { SimpleGrid, Box, Image } from '@chakra-ui/react';

const PictureList: React.FC = () => {
  return (
    <SimpleGrid
      SimpleGrid
      minChildWidth="150px"
      spacing="60px"
      gap={6}
      ml={80}
      mr={80}
    >
      {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map(_item => (
        <Box height="160px" width="150px" borderRadius={8}>
          <Image
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
            borderRadius={8}
            fallbackSrc="https://via.placeholder.com/150"
            className="img"
          />
        </Box>
      ))}
    </SimpleGrid>
  );
};
export default PictureList;
