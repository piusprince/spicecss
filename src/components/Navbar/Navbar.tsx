import { navbarContainer, themeClass } from "./navbar.css";
import { spice } from "@/styles/sprinkles.css";

export default function Navbar() {
  return (
    <div
      className={spice({
        backgroundColor: "gray-100",
        width: "full",
        height: "size-9",
        display: "flex",
        justifyContent: "space-between",
      })}
    >
      <div
        className={spice({
          display: "flex",
          alignItems: "center",
          padding: "size-5",
        })}
      >
        Logo
      </div>
      <div
        className={spice({
          display: "flex",
          alignItems: "center",
          gap: "size-8",
          padding: "size-5",
          cursor: "pointer",
        })}
      >
        <a>About</a>
        <a>Products</a>
        <a>Support</a>
      </div>
    </div>
  );
}
