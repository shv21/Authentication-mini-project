import { useState } from "react";

function Input({ type = "text", ...rest }) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="relative">
      <input
        type={inputType}
        {...rest}
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      )}
    </div>
  );
}

export default Input;