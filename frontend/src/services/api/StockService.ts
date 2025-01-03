import { ApiResponse, Stock } from "../../pages/Main/Main";
import axios from "../axios";

export const findStockByCountry = async (
    country: String
): Promise<ApiResponse<Stock[]>> => {
    try {
        const response = await axios.get<Stock[]>(`stock/${country}`);
        return {
            success: true,
            data: response.data,
        };
    } catch (error: any) {
        return {
            success: false,
            error: error.message,
        };
    }
};

export const getStockInfo = async (
    stockCd: String
): Promise<ApiResponse<Stock>> => {
    try {
        const response = await axios.get<Stock>(`stock/info/${stockCd}`);
        return {
            success: true,
            data: response.data,
        };
    } catch (error: any) {
        return {
            success: false,
            error: error.message,
        };
    }
};
