import axios from "axios";

export const get = async (path: string) => {
    const response = await axios.get(path);
    return response;
}
