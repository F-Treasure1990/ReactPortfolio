const Logo = ({ size, color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 26 26">
      <g id="Group_71" data-name="Group 71" transform="translate(26 26) rotate(180)">
        <path id="Path_22" data-name="Path 22" d="M3.25,0,0,3.25H16.25V26l3.25-3.25V3.25H26L22.75,0Z" fill={color} />
        <path id="Path_23" data-name="Path 23" d="M0,27V40l3.25,3.25v-13H13L9.75,27Z" transform="translate(0 -17.25)" fill={color} />
      </g>
    </svg>
  );
};

export default Logo;
