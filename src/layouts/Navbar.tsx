import { useScrollTrigger } from "@mui/material";

export default function Navbar() {
  const trigger = useScrollTrigger();

  return (
    <nav className={trigger ? "navScrolled" : ""}>
      Navbar &nbsp; &nbsp; Get started by editing src/pages/index.tsx
    </nav>
  );
}
