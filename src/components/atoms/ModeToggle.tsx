import { motion } from "framer-motion";
import styled from "styled-components";
import { useThemeStore } from "@/services/store";

export default function ModeToggle() {
  const { theme, setTheme } = useThemeStore(state => state);

  return (
    <Switch
      $isOn={theme === "dark"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <Handle layout transition={spring} />
    </Switch>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const Switch = styled.div<{ $isOn: boolean }>`
  width: 60px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.toggleSwitch};
  display: flex;
  align-self: flex-end;
  justify-content: ${({ $isOn }) => ($isOn ? "flex-end" : "flex-start")};
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;
`;

const Handle = styled(motion.div)`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 100%;
`;
