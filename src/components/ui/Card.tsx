import React from "react";
import { cn } from "../../lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ className, children, hover = false }) => {
  return (
    <div
      className={cn(
        "rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900",
        hover &&
          "transition-all duration-200 hover:shadow-md hover:transform hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ className, children }) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
  onclick?: () => void;
}

const CardTitle: React.FC<CardTitleProps> = ({
  className,
  children,
  onclick,
}) => {
  return (
    <h3
      onClick={onclick}
      className={cn(
        "text-lg font-semibold text-gray-900 dark:text-white cursor-pointer ",
        className
      )}
    >
      {children}
    </h3>
  );
};

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ className, children }) => {
  return <div className={cn("p-6 pt-0", className)}>{children}</div>;
};

interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

const CardFooter: React.FC<CardFooterProps> = ({ className, children }) => {
  return (
    <div className={cn("flex items-center p-6 pt-0", className)}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardTitle, CardContent, CardFooter };
