import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode } from '@chakra-ui/react';

export default function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
      <Button
        onClick={toggleColorMode}
        _focus={{ boxShadow: 'none' }}
        w="fit-content">
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
  );
}