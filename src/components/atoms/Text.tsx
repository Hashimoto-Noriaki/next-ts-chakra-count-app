import { Text as ChakraText } from "@chakra-ui/react";

type Props = {
  content: string;
};

export const Text = ({ content }: Props) => {
  return <ChakraText fontSize="2xl">{content}</ChakraText>;
};
