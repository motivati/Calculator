import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Calculator.css";

export default function Calculator() {
  const [value, setValue] = useState("");

  const handleClick = (val) => {
    if (val === "=") {
      try {
        // eslint-disable-next-line no-eval
        setValue(eval(value).toString());
      } catch {
        setValue("Error");
      }
    } else if (val === "C") {
      setValue("");
    } else {
      setValue(value + val);
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4 fw-bold">React Calculator</h1>
      <div className="card p-4 shadow-lg mx-auto" style={{ maxWidth: "320px" }}>
        <input
          type="text"
          className="form-control text-end mb-3"
          value={value}
          readOnly
        />

        {[
          ["7", "8", "9", "/"],
          ["4", "5", "6", "*"],
          ["1", "2", "3", "-"],
          ["0", ".", "=", "+"],
          ["C"],
        ].map((row, i) => (
          <div key={i} className="d-flex gap-2 mb-2">
            {row.map((btn) => (
              <button
                key={btn}
                className={`btn ${
                  btn === "="
                    ? "btn-success flex-fill"
                    : btn === "C"
                    ? "btn-danger flex-fill"
                    : "btn-secondary flex-fill"
                }`}
                onClick={() => handleClick(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
