import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const ScrollTopBtn = () => {
  const { accent } = useSelector(state => state.ThemeSlice.theme.palette);

  return (
    <svg width="30" height="30" viewBox="0 0 30 30">
      <defs>
        <clipPath>
          <rect
            id="Rectangle_699"
            data-name="Rectangle 699"
            width="14"
            height="14.003"
            fill="none"
          />
        </clipPath>
      </defs>
      <g id="Group_621" data-name="Group 621" transform="translate(-12 187)">
        <rect
          style={{ transition: "all ease 0.3s" }}
          id="Rectangle_700"
          data-name="Rectangle 700"
          width="30"
          height="30"
          rx="6"
          transform="translate(12 -187)"
          fill={accent}
        />
        <motion.g id="Group_620" data-name="Group 620" transform="translate(20 -178.999)">
          <g id="Group_619" data-name="Group 619" transform="translate(0 0)">
            <path
              id="Path_2116"
              data-name="Path 2116"
              d="M13.606,8.328a1.284,1.284,0,0,1-1.887,0L8.336,4.782V12.6a1.337,1.337,0,1,1-2.67,0V4.791L2.283,8.337a1.31,1.31,0,0,1-1.9,0,1.469,1.469,0,0,1,0-1.988L6.057.413a1.284,1.284,0,0,1,1.887,0L13.606,6.35a1.439,1.439,0,0,1,0,1.979"
              transform="translate(0 0)"
              fill="#323849"
            />
          </g>
        </motion.g>
      </g>
    </svg>
  );
};

export default ScrollTopBtn;
