import axios from 'axios';


const apiUrl = "https://api.unsplash.com";
const apiKey = 'f2b293ee91c0137469c8543ebd436236b842a7ef4ed3cfd46713231ea0d47cde';

export default class APIService {


    static async request(endpoint = null, type = null, params = null) {

        switch (type) {

            case "GET":
                let response = await axios.get(`${apiUrl}${endpoint}`, {
                    params: params,
                    headers: {
                        Authorization: `Client-ID ${apiKey}`
                    }
                });

                return response;

            default:
                return false;


        }


    }


}



