import React from 'react';
import { useHistory } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import { Button, Flex, Heading, Input } from '@chakra-ui/react';

const Main: React.FC = () => {
  // const { t } = useTranslation(['languanges']);
  const history = useHistory();

  const [isLoading, setIsLoading] = React.useState(false);

  function handleLogin() {
    setIsLoading(true);
    sessionStorage.setItem('authenticated', 'true');
    setTimeout(() => history.push('/home'), 2000);
  }

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        p={12}
        alignItems="center"
        justifyContent="center"
      >
        <Heading mb={6}>React Pictures</Heading>
        <Flex direction="column" background="gray.700" p={12} rounded={6}>
          <Heading mb={6}>Log in</Heading>
          <Input
            placeholder="email@domain.com"
            variant="filled"
            mb={3}
            type="email"
          />
          <Input placeholder="******" variant="filled" mb={6} type="password" />
          <Button
            colorScheme="teal"
            onClick={handleLogin}
            isLoading={isLoading}
          >
            Log in
          </Button>
          <Button
            colorScheme="white"
            variant="outline"
            mt={5}
            onClick={() => history.push('/register')}
          >
            Register
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Main;
