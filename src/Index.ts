import axios from "axios";
import { ComicResponse, LatestResponse } from "./Structures";

export class TouwaJS {
    private BASE_URL: string;

    public constructor() {
        this.BASE_URL = "https://touwa-api.justapie.tk";
    }

    /**
     * Get 10 latest comics from the website
     * @returns {Promise} Promise object containing LatestResponse object
     */
    public async getLatestComic(): Promise<LatestResponse> {
        return (await axios.get(this.BASE_URL + "/comic/latest")).data;
    }

    /**
     * Get information about a specific comic with a given ID
     * @param {string} id The comic ID
     * @returns {Promise} Promise object containing ComicResponse object
     */
    public async getComicByID(id: string): Promise<ComicResponse | null> {
        return (await axios.get(this.BASE_URL + "/comic/" + id)).data;
    }
}