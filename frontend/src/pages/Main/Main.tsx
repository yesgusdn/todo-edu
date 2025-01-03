import { useEffect, useMemo, useState } from "react";

// Theme
import type { ColDef } from "ag-grid-community";

// Core CSS
import { AgGridReact } from "ag-grid-react";
import type { CustomCellRendererProps } from "ag-grid-react";

import TabButton from "../../components/Button/TabButton";
import { findStockByCountry } from "../../services/api/StockService";

// Custom Cell Renderer (Display logos based on cell value)
// const CompanyLogoRenderer = (params: CustomCellRendererProps) => (
//     <span
//         style={{
//             display: "flex",
//             height: "100%",
//             width: "100%",
//             alignItems: "center",
//         }}
//     >
//         {params.value && (
//             <img
//                 alt={`${params.value} Flag`}
//                 src={`https://www.ag-grid.com/example-assets/space-company-logos/${params.value.toLowerCase()}.png`}
//                 style={{
//                     display: "block",
//                     width: "25px",
//                     height: "auto",
//                     maxHeight: "50%",
//                     marginRight: "12px",
//                     filter: "brightness(1.1)",
//                 }}
//             />
//         )}
//         <p
//             style={{
//                 textOverflow: "ellipsis",
//                 overflow: "hidden",
//                 whiteSpace: "nowrap",
//             }}
//         >
//             {params.value}
//         </p>
//     </span>
// );

/* Custom Cell Renderer (Display tick / cross in 'Successful' column) */
// const MissionResultRenderer = (params: CustomCellRendererProps) => (
//     <span
//         style={{
//             display: "flex",
//             justifyContent: "center",
//             height: "100%",
//             alignItems: "center",
//         }}
//     >
//         {
//             <img
//                 alt={`${params.value}`}
//                 src={`https://www.ag-grid.com/example-assets/icons/${
//                     params.value ? "tick-in-circle" : "cross-in-circle"
//                 }.png`}
//                 style={{ width: "auto", height: "auto" }}
//             />
//         }
//     </span>
// );

// const dateFormatter = (params: ValueFormatterParams): string => {
//     return new Date(params.value).toLocaleDateString("en-us", {
//         weekday: "long",
//         year: "numeric",
//         month: "short",
//         day: "numeric",
//     });
// };

// Row Data Interface
export interface Stock {
    stockCd: string;
    stockNm: string;
    country: string;
}

export type ApiResponse<T> = {
    success: boolean;
    data?: T;
    error?: string;
};

const Main: React.FC = () => {
    const [tab, setTab] = useState<Number>(1);
    const [testData, setTestData] = useState<Stock[] | undefined>();
    // Column Definitions: Defines & controls grid columns.
    const [colDefs] = useState<ColDef[]>([
        {
            field: "번호",
            width: 100,
            cellRenderer: (params: CustomCellRendererProps) => {
                const rowNum: number = Number(params.node.id) || 0;
                return rowNum + 1;
            },
        },
        {
            field: "stockCd",
            headerName: "종목",
            width: 150,
        },
        {
            field: "stockNm",
            headerName: "종목명",
            width: 150,
        },
    ]);

    useEffect(() => {}, [testData]);

    const defaultColDef = useMemo<ColDef>(() => {
        return {
            filter: false,
            editable: false,
        };
    }, []);

    const buttons = [
        { id: 1, label: "KOR" },
        { id: 2, label: "USA" },
        { id: 3, label: "JPN" },
    ];

    const getStockData = async (country: String) => {
        const response = await findStockByCountry(country);
        if (response.success === true) {
            setTestData(response.data);
        } else {
            console.log(response.error);
        }
    };

    const tabClick = (id: Number, country: String) => {
        setTab(id);
        getStockData(country);
    };

    return (
        <div className="flex flex-col min-w-screen h-full p-3  space-y-5">
            <div className="flex flex-row w-full space-x-2">
                {buttons.map((button) => (
                    <TabButton
                        key={button.id}
                        active={tab === button.id}
                        onClick={() => tabClick(button.id, button.label)}
                    >
                        {button.label}
                    </TabButton>
                ))}
            </div>

            <div style={{ minHeight: "500px", height: "calc(100vh - 15vh)" }}>
                <AgGridReact
                    rowData={testData}
                    columnDefs={colDefs}
                    defaultColDef={defaultColDef}
                    pagination={true}
                    onSelectionChanged={(event) => console.log("Row Selected!")}
                    onCellValueChanged={(event) => {
                        console.log(`New Cell Value: ${event.value}`);
                        console.log(event);
                    }}
                />
            </div>
        </div>
    );
};

export default Main;
