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
        if (error.name === "AxiosError") {
            return error.message
        } else {
            return error.response.data.message;
        }
    });

    return response;
};

export const getUserById = async (id: number) => {
    const response = await axios.get(process.env.apiUrl + "/users/" + id, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
        },
    }).then((response) => {
        return response.data.data;
    }).catch((error) => {
        if (error.name === "AxiosError") {
            return error.message
        } else {
            return error.response.data.message;
        }
    });

    return response;
}

export const updateUserById = async (id: string, data: any) => {
    console.log(data)
    const response = await axios.post(process.env.apiUrl + "/users/" + id, data, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
        },
    }).then((response) => {
        return response.data.data;
    }).catch((error) => {
        if (error.name === "AxiosError") {
            return error.message
        } else {
            return error.response.data.message;
        }
    });

    return response;
}

export const deleteUser = async (id: number) => {
    const response = await axios.delete(process.env.apiUrl + "/users/" + id, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
        },
    }).then((response) => {
        return response.data.data;
    }).catch((error) => {
        if (error.name === "AxiosError") {
            return error.message
        } else {
            return error.response.data.message;
        }
    })

    return response;
};