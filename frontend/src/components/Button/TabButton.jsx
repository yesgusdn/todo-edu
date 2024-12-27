import classNames from "classnames";

const TabButton = ({ children, onClick, active }) => {
    return (
        <button
            className={classNames({
                "text-zinc-700 border-b-2 border-zinc-600 hover:border-blue-700":
                    active,
                "text-zinc-300": !active,
            })}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
export default TabButton;
