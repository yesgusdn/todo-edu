import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStockInfo } from "../../services/api/StockService";
import { Stock } from "../Main/Main";

const StockInfo: React.FC = () => {
    const { stockCd } = useParams();

    const [stock, setStock] = useState<Stock | undefined>();

    const handleStockInfo = async (stockCd: String) => {
        const response = await getStockInfo(stockCd);
        if (response.success === true) {
            setStock(response.data);
        } else {
            console.log(response.error);
        }
    };

    useEffect(() => {
        if (stockCd) handleStockInfo(stockCd);
    }, [stockCd]);
    return (
        <div>
            <div>hihi</div>
            {stock?.stockNm}
        </div>
    );
};

export default StockInfo;
