import classNames from "classnames";

const NavButton = ({ children, active, onClick }) => {
    return (
        <button
            className={classNames({
                "text-zinc-700": active,
                "text-zinc-300 hover:text-zinc-700": !active,
            })}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default NavButton;
