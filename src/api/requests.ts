import axios from "axios";
// api Url is the address of the back
const apiUrl = "http://localhost:1337";

export const requests = {

    // example how to do a request
    getList: async (params: any) => {
        const {page, limit} = params;
        const {data} = await axios.get(`${apiUrl}/petition/all/${page}/${limit}`, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
        console.log(data)
        return data;
    },
};