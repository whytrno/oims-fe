import axios from "axios";
import Cookies from "js-cookie";

export const getUser = async () => {
    const response = await axios.get(process.env.apiUrl + "/users", {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
        },
    }).then((response) => {
        return response.data.data;
    }).catch((error) => {
        return error.response.data.message;
    });

    return response;
};

export const deleteUser = async (id: string) => {
    const response = await axios.delete(process.env.apiUrl + "/users/" + id, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
        },
    }).then((response) => {
        return response.data.data;
    }).catch((error) => {
        return error.response.data.message;
    })

    return response;
};