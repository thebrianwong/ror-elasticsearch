import { forwardRef } from "react";

// const BackToTopButton = React.useRef<HTMLDivElement>
const BackToTopButton = forwardRef((props, ref) => {
  return (
    <button className="fixed bottom-16 right-16 bg-zinc-500 rounded-xl w-6 h-6">
      ^
    </button>
  );
});

export default BackToTopButton;
