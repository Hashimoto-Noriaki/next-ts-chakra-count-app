import { Counter } from "../components/organisms/Counter";
import { MainTemplate } from "../components/templates/MainTemplate";

export default function Home() {
  return (
    <MainTemplate>
      <Counter />
    </MainTemplate>
  );
}
