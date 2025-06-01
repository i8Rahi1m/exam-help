import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="transition-[0.3s] fixed bottom-2 right-3 p-2 text-[20px] rounded-full bg-[black] z-10 border-[1px] border-[#ffffffc8] hover:bg-[#434343] hover:shadow-[0px_0px_8px_white] after:shadow-2xl active:bg-[#696969] active:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    )
  );
}
