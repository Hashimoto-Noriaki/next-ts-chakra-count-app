import { ReactNode } from "react";
import { Container, Heading } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

export const MainTemplate = ({ children }: Props) => {
  return (
    <Container centerContent>
      <Heading as="h1" size="2xl" my={4}>
        カウンターアプリ
      </Heading>
        {children}
    </Container>
  );
};
