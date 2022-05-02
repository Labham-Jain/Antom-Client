import "./logo.css";

interface Props {
  viewPortWidth?: number;
  width?: number;
}

const Logo = ({ viewPortWidth = 200, width = 164 }: Props) => {
  return (
    <svg
      viewBox={`0 0 ${viewPortWidth} ${viewPortWidth / 4.4}`}
      className="logo-svg"
      style={{ width }}
    >
      <text
        x="50%"
        y="50%"
        dy=".35em"
        textAnchor="middle"
        className="logo-text"
      >
        Antom
      </text>
    </svg>
  );
};

export default Logo;
