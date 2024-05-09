import BackToTopButtonProps from "./type";

const BackToTopButton = ({ elementRef }: BackToTopButtonProps) => {
  return (
    <button
      className="fixed bottom-16 right-16 bg-zinc-500 rounded-xl w-6 h-6"
      onClick={() =>
        elementRef?.current?.scrollIntoView({ behavior: "smooth" })
      }
    >
      ^
    </button>
  );
};

export default BackToTopButton;
