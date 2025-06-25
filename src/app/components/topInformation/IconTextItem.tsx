import React from "react";
import Image from "next/image";

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
    <Image className={iconClassName} alt={alt} src={icon} width={20} height={20} />
    <div className={`h-4 leading-tight ${textClassName}`}>{text}</div>
  </div>
);

export default IconTextItem;
