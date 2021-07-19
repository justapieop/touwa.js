import axios, { AxiosAdapter, AxiosResponse } from "axios";
import { 
    AuthorComicResponse, 
    ChapterResponse, 
    CharacterResponse, 
    ComicResponse, 
    DoujinResponse, 
    LatestResponse, 
    ReadResponse, 
    SearchResponse, 
    TagResponse
} from "./Structures";
import { cacheAdapterEnhancer, throttleAdapterEnhancer } from "axios-extensions";

export class TouwaJS {
    private BASE_URL: string;

    public constructor() {
        this.BASE_URL = "https://touwa-api.justapie.tk";
    }

    private async getRawInfo(route: string): Promise<any> {
        if (!route.startsWith("/")) route = "/" + route;
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
    public async getLatestComic(): Promise<LatestResponse | null> {
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

    /**
     * Get all of the chapters of a specific comic with a given ID
     * @param {string} id The comic ID
     * @returns {Promise} Promise object containing ChapterResponse object
     */
    public async getComicChapterByID(id: string): Promise<ChapterResponse | null> {
        return this.getRawInfo(`/comic/${id}/chapters`);
    }

    /**
     * Get all of the images of a comic with a given code
     * @param {string} code The comic code
     * @returns {Promise} Promise object containing ReadResponse object
     */
    public async getComicImagesByID(code: string): Promise<ReadResponse | null> {
        return this.getRawInfo(`/read/${code}`);
    }

    /**
     * Get the comic list of an author
     * @param {string} name The author name
     * @returns {Promise} Promise object containing AuthorComicResponse object
     */
    public async getComicsByAuthor(name: string): Promise<AuthorComicResponse | null> {
        return this.getRawInfo(`/author/${name}`);
    }

    /**
     * Get the comic list of a character
     * @param {string} name The character name
     * @returns {Promise} Promise object containing CharacterResponse object
     */
    public async getComicsByCharacter(name: string): Promise<CharacterResponse | null> {
        return this.getRawInfo(`/character/${name}`);
    }

    /**
     * Get the comic list of a doujinshi
     * @param {string} name The doujinshi name
     * @returns {Promise} Promise object containing DoujinResponse object
     */
    public async getComicsByDoujinshiName(name: string): Promise<DoujinResponse | null> {
        return this.getRawInfo(`/doujin/${name}`);
    }

    /**
     * Get the comic list of a tag
     * @param {string} tag The tag name
     * @returns {Promise} Promise object containing TagResponse object
     */
    public async getComicsByTag(name: string): Promise<TagResponse | null> {
        return this.getRawInfo(`/tag/${name}`);
    }

    /**
     * Get the search result from a query
     * @param {string} query The search query
     * @param {number} [page = 1] The comic page you want to search
     * @returns {Promise} Promise object containing SearchResponse object
     */
    public async searchComics(query: string, page: number = 1): Promise<SearchResponse | null> {
        return this.getRawInfo(`/search/${query}?page=${page}`);
    }

    /**
     * Get full information of an user
     * @param {string} id The user id
     * @returns {Promise} Promise object containing UserResponse object
     */
    public async getUserByID(id: string): Promise<SearchResponse | null> {
        return this.getRawInfo(`/user/${id}`);
    }
}