import { useState } from "react";
import TabButton from "../../components/Button/TabButton";

const Main = () => {
    const [tab, setTab] = useState(1);

    const buttons = [
        { id: 1, label: "KOR" },
        { id: 2, label: "ENG" },
        { id: 3, label: "JPN" },
    ];

    const tabClick = (id) => {
        setTab(id);
    };
    return (
        <div className="flex flex-col p-3">
            <div className="flex flex-row w-full space-x-2">
                {buttons.map((button) => (
                    <TabButton
                        key={button.id}
                        active={tab === button.id}
                        onClick={() => tabClick(button.id)}
                    >
                        {button.label}
                    </TabButton>
                ))}
            </div>
        </div>
    );
};

export default Main;
