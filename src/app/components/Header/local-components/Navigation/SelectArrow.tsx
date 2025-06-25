const SelectArrow = ({
  rotated = false,
  color = "#1d2d1e"
}: {
  rotated?: boolean;
  color?: string;
}) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      marginLeft: 4,
      transition: "transform 0.2s",
      transform: rotated ? "rotate(180deg)" : "rotate(0deg)",
      display: "block"
    }}
  >
    <path
      d="M4 6L8 10L12 6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SelectArrow;
