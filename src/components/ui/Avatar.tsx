import React from "react";
import { cn } from "../../lib/utils";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "User Avatar",
  size = 40,
  className = "",
}) => {
  return (
    <img
      src={src || "https://via.placeholder.com/150"}
      alt={alt}
      width={size}
      height={size}
      className={cn("rounded-full object-cover", className)}
    />
  );
};

export default Avatar;
