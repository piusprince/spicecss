import { btnVariants } from "./button.css";

interface ButtonProps {
  variant: keyof typeof btnVariants;
}

export default function Button({ variant }: ButtonProps) {
  return (
    <div>
      <button className={btnVariants[variant]}>Click me</button>
    </div>
  );
}
