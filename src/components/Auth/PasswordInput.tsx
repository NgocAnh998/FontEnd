import { useState } from "react";

interface PasswordInputProps {
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
}

function PasswordInput({ value, placeholder, onChange }: PasswordInputProps) {
    const [visible, setVisible] = useState(false);

    return (
        <div className="input-group">
            <span className="input-group-text bg-white">
                <i className="bi bi-lock"></i>
            </span>

            <input
                type={visible ? "text" : "password"}
                className="form-control py-2"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />

            <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setVisible(!visible)}
                aria-label={visible ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
            >
                <i className={`bi ${visible ? "bi-eye-slash" : "bi-eye"}`}></i>
            </button>
        </div>
    );
}

export default PasswordInput;