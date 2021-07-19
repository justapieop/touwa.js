import axios, { AxiosAdapter, AxiosResponse } from "axios";
import { ComicResponse, LatestResponse } from "./Structures";
import { cacheAdapterEnhancer, throttleAdapterEnhancer } from "axios-extensions";

export class TouwaJS {
    private BASE_URL: string;

    public constructor() {
        this.BASE_URL = "https://touwa-api.justapie.tk";
    }

    private async getRawInfo(route: string): Promise<any> {
        this.BASE_URL = "https://touwa-api.justapie.tk" + route;
        const response: AxiosResponse<any> = await axios.get(this.BASE_URL, {
            headers: {
                "Cache-Control": "no-cache"
            },
            adapter: throttleAdapterEnhancer(
                cacheAdapterEnhancer(
                    axios.defaults.adapter as AxiosAdapter
                    )
                )
        });
        if (!response.data.success) {
            const statusCode: number = response.data.error_code;
            throw new Error(`Request returned status code ${statusCode}`);
        }
        return response.data;
    }

    /**
     * Get 10 latest comics from the website
     * @returns {Promise} Promise object containing LatestResponse object
     */
    public async getLatestComic(): Promise<LatestResponse> {
        return this.getRawInfo("/comic/latest");
    }

    /**
     * Get information about a specific comic with a given ID
     * @param {string} id The comic ID
     * @returns {Promise} Promise object containing ComicResponse object
     */
    public async getComicByID(id: string): Promise<ComicResponse | null> {
        return this.getRawInfo(`/comic/${id}`);
    }
}