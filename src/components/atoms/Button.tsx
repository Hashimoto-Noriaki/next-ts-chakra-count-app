import { Button as ChakraButton } from "@chakra-ui/react";

type Props = {
    onClick: () => void;
    label: string;
}

export const Button = ({onClick,label}: Props ) => {
  return (
    <ChakraButton colorScheme="teal" onClick={onClick}>
        { label }
    </ChakraButton>
  )
}

export default Button