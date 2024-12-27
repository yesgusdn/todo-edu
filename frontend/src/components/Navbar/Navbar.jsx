import { useState } from "react";
import NavButton from "../Button/NavButton";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(1);
    const onClick = (e) => {
        setActive(e.id);
        navigate(`${e.url}`);
    };
    const navButtons = [
        { id: 1, label: "Home", url: "/" },
        { id: 2, label: "CHECK", url: "/check" },
    ];
    return (
        <div className="flex">
            <div className="flex p-3 space-x-2">
                {navButtons.map((button) => (
                    <NavButton
                        key={button.id}
                        active={active === button.id ? true : false}
                        onClick={() => onClick(button)}
                    >
                        {button.label}
                    </NavButton>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
