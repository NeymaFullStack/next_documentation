import clsx from "clsx";

interface ButtonProps {
  isPrimary?: boolean;
  isDisabled?: boolean;
}

const AboutButton: React.FC<ButtonProps> = ({ isPrimary, isDisabled }) => {
  return (
    <button
      className={clsx("btn", {
        "btn-primary": isPrimary,
        "btn-disabled": isDisabled,
      })}
    >
      <span className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-400 md:text-base w-20">
        About
      </span>
    </button>
  );
};

export default AboutButton;
