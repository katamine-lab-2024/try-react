import { ComponentPropsWithoutRef, FC } from "react";
import clsx from "clsx";

import styles from "./index.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
} & ComponentPropsWithoutRef<"button">;

export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  return (
    <button
      className={clsx(styles.buttonPrimary, {
        [styles.buttonSecondary]: variant === "secondary"
      })}
      {...props}
    >
      {children}
    </button>
  );
};

// clsx使うなら isPrimary?: boolean; の方が適切かもしれない
