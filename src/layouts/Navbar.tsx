import { Fade, useScrollTrigger } from "@mui/material";
import { useEffect, useState } from "react";

export default function Navbar() {
  const trigger = useScrollTrigger();
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  let timer: NodeJS.Timeout;

  useEffect(() => {
    const handleMouseActivity = () => {
      setIsMouseOver(true);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsMouseOver(false);
      }, 8000);
    };

    document.addEventListener("mousemove", handleMouseActivity);

    return () => {
      document.removeEventListener("mousemove", handleMouseActivity);
    };
  }, []);

  return (
    <Fade
      in={trigger && isMouseOver}
      timeout={{
        appear: 500,
        enter: 300,
        exit: 1000,
      }}
    >
      <nav className={trigger && isMouseOver ? "navScrolled" : ""}>
        Navbar &nbsp; &nbsp; Get started by editing src/pages/index.tsx
      </nav>
    </Fade>
  );
}
