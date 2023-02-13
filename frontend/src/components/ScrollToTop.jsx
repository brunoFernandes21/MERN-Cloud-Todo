import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { useLocation } from "react-router";
//this component is used to scroll to top of page on router change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const backToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return <div className="fixed bottom-2 right-2">
    {isVisible && 
        <button onClick={backToTop} 
        className=" inline-flex items-center pa3 shadow-lg
        transition-opacity focus:outline-none focus:ring-2
        focus:ring-offset-2 rounded-full"
        >
            <BsFillArrowUpCircleFill className="h-8 w-8" aria-hidden={true} />
        </button>
    }
  </div>;
};

export { ScrollToTop, BackToTop };
