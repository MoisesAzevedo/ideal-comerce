import React from "react";

interface IconTextItemProps {
  icon: string;
  alt: string;
  text: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  style?: React.CSSProperties;
}

const IconTextItem: React.FC<IconTextItemProps> = ({
  icon,
  alt,
  text,
  className = "",
  iconClassName = "",
  textClassName = "",
  style = {}
}) => (
  <div className={`flex items-end ${className}`} style={style}>
    <img className={iconClassName} alt={alt} src={icon} />
    <div className={`h-4 leading-tight ${textClassName}`}>{text}</div>
  </div>
);

export default IconTextItem;
