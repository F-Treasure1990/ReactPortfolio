import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { changeAccentColor } from "Store/ThemeSlice";
import { FlexCenter } from "styles/GlobalStyles";

export const ColorPicker_Container = styled.div`
  height: max-content;

  display: flex;
  justify-content: space-between;
  width: max-content;
  cursor: pointer;
  flex-basis: 228px;
  padding: 0 12px;
  margin-top: ${({ infosec }) => (infosec ? "16px" : "0px")};
  max-height: max-content;
  transition: margin ease 0.3s;
  ${({ infosec }) =>
    infosec &&
    css`
      ${({ theme }) => theme?.mediaQ.customDown(700)} {
        order: 3;
        width: 50%;
        flex-basis: max-content;
        margin-top: 48px;
      }
      ${({ theme }) => theme?.mediaQ.customDown(450)} {
        order: 3;
        width: 80%;
        flex-basis: max-content;
        margin-top: 36px;
      }
    `}
`;

export const ColorPickerColor = styled.div`
  border-radius: 100%;
  background-color: ${({ color }) => color};
  overflow: hidden;
  ${FlexCenter}
  transform-origin: center center;
  ${({ infosec }) =>
    infosec
      ? css`
          height: 24px;
          width: 24px;
        `
      : css`
          height: 20px;
          width: 20px;
        `}
`;

export const ColorPickerColor_Center = styled(motion.div)`
  height: ${({ theme, infosec }) => (infosec ? "16px" : "14px")};
  aspect-ratio: 1/1;
  border-radius: 100%;
  background-color: ${({ theme, infosec }) =>
    infosec ? theme?.palette?.main : theme?.palette?.secondary};
`;

export const ColorPicker = ({ infosec }) => {
  const accentColor = useSelector(state => state.ThemeSlice.theme.palette.accent);
  const colors = ["#50FA7B", "#FFB86C", "#BD93F9", "#FF79C6", "#5dddfa"];
  const dispatch = useDispatch();
  // console.log(accentColor);

  return (
    <ColorPicker_Container infosec={infosec}>
      {colors.map((color, i) => (
        <ColorPickerColor
          infosec={infosec}
          key={`${color}-${i}`}
          color={color}
          onClick={() => {
            dispatch(changeAccentColor(color));
          }}
        >
          <ColorPickerColor_Center
            infosec={infosec}
            initial={color === accentColor ? { scale: 0 } : { scale: 1 }}
            animate={color === accentColor ? { scale: 0 } : { scale: 1 }}
          />
        </ColorPickerColor>
      ))}
    </ColorPicker_Container>
  );
};
