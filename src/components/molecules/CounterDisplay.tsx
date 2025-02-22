import { VStack } from "@chakra-ui/react";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";

type Props = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export const CounterDisplay = ({ count, onIncrement, onDecrement }: Props) => {
  return (
    <VStack>
      <Text content={`Count: ${count}`} />
      <Button onClick={onIncrement} label="+" />
      <Button onClick={onDecrement} label="-" />
    </VStack>
  );
};
