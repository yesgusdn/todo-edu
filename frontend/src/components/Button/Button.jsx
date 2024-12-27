const Button = ({ children, onClick }) => {
    return (
        <button
            className="w-full p-3 font-semibold rounded-lg shawdow-md text-white bg-blue-500 hover:bg-blue-700"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
