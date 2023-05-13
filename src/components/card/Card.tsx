import clsx from "clsx";
import { PropsWithChildren } from "react";

type CardProps = {
  className?: string;
};

export const Card = ({ children, className }: PropsWithChildren<CardProps>) => {
  return (
    <div
      className={clsx(
        "flex flex-col rounded-2xl bg-bg-light-100 p-5 shadow-card-light",
        className
      )}
    >
      {children}
    </div>
  );
};
