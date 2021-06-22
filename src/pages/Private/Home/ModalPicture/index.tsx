import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from '@chakra-ui/react';

export default function ModalPicture({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} colorScheme="blackAlpha">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="gray.900">Add new Picture</ModalHeader>
        <ModalCloseButton />
        <ModalBody color="gray.900">
          <Input placeholder="Basic usage" type="file" />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" variant="ghost">
            Upload picture
          </Button>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
