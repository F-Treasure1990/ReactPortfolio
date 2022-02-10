import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

const MasterTheme = ({ children }) => {
  const Theme = useSelector(state => state.ThemeSlice.theme);
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};

export default MasterTheme;
