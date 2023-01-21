import { spice } from "@/styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export default function Hero() {
  return (
    <section
      className={spice({
        display: "flex",
      })}
    >
      <div
        className={spice({
          backgroundColor: "yellow-100",
          height: "size-15",
          width: "size-15",
        })}
      >
        content
      </div>
      <div
        className={spice({
          display: "flex",
        })}
      >
        <div
          className={spice({
            backgroundColor: "red-200",
            width: "size-15",
            height: "size-15",
          })}
        ></div>
        <div
          className={spice({
            backgroundColor: "red-200",
            width: "size-15",
          })}
        ></div>
      </div>
    </section>
  );
}
