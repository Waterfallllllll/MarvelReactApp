const ErrorMessage = () => {
    return (
        <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            style={{ display: "block", background: "#fff", margin: "0 auto" }}
        >
            <style>
                {`@keyframes animate {
                    0% { transform: scale(0.91); }
                    50% { transform: scale(1.03); }
                    100% { transform: scale(0.91); }
                }`}
            </style>

            <g
                style={{
                    transformOrigin: "50px 50px",
                    animation: "animate 1s infinite linear",
                }}
            >
                <path
                    d="M22 78l56-56"
                    stroke="#e15b64"
                    strokeWidth="22"
                    fill="none"
                />
                <path
                    d="M78 78L22 22"
                    stroke="#e15b64"
                    strokeWidth="22"
                    fill="none"
                />
            </g>
        </svg>
    );
};

export default ErrorMessage;
