import BackToTopButtonProps from "./type";

const BackToTopButton = ({ elementRef }: BackToTopButtonProps) => {
  return (
    <button
      className="fixed bottom-16 right-16 bg-zinc-500 rounded-3xl w-8 h-8 text-slate-50 font-bold"
      onClick={() =>
        elementRef?.current?.scrollIntoView({ behavior: "smooth" })
      }
    >
      ^
    </button>
  );
};

export default BackToTopButton;
