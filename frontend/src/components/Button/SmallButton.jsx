const SmallButton = ({ children, onClick }) => {
    return (
        // w-full p-3 font-semibold rounded-lg shawdow-md text-white bg-blue-500 hover:bg-blue-700
        <button
            className="w-full h-full font-medium rounded-lg bg-white border border-gray-300 text-gray-700"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default SmallButton;
