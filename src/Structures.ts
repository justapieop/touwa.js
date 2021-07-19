export interface BaseResponse {
    success?: boolean,
    url?: string,
    ping?: string
}

export interface LatestResponse extends BaseResponse {
    data?: LatestComic[]
}

export interface LatestComic {
    url?: string,
    name?: string,
    image_url?: string,
    id?: number
}

export interface ComicResponse {
    data: Comic
}

export interface Comic {
    name?: string,
    image_url?: string
    uploaders?: Uploader[],
    other_names?: OtherName[],
    tags?: Tag[],
    authors?: Author[],
    characters?: Character[],
    doujins?: Doujin[],
    credits?: string,
    completed?: string,
    views?: number,
    other_parts?: OtherPart[],
    download_link?: string,
    group_external_link?: string,
    likes?: number,
    dislikes?: number,
    chapters?: Chapter[]
}

export interface Uploader {
    name?: string,
    link?: string,
    badge?: string
}

export interface OtherName {
    name?: string,
    link?: string
}

export interface Tag {
    name?: string,
    link?: string
}

export interface Author {
    name?: string,
    link?: string
}

export interface Character {
    name?: string,
    link?: string
}

export interface Doujin {
    name?: string,
    link?: string
}

export interface OtherPart {
    name?: string,
    link?: string
}

export interface Chapter {
    name?: string,
    link?: string,
    upload_date?: string,
    code?: string
}

export interface ChapterResponse extends BaseResponse {
    data?: Chapter[]
}

export interface ReadResponse extends BaseResponse {
    data?: ReadComic
}

export interface ReadComic {
    comic?: ComicRead,
    chapter_name?: string,
    id?: string
}

export interface ComicRead {
    name?: string,
    link?: string,
    id?: string
}

export interface GenericComic {
    name?: string,
    link?: string,
    id?: string,
    chapter_status?: string,
    other_names?: OtherName[],
    tags?: Tag[],
    views?: number
}

export interface AuthorComicResponse extends BaseResponse {
    data?: GenericComic[]
}

export interface CharacterResponse extends BaseResponse {
    data?: GenericComic[]
}

export interface DoujinResponse extends BaseResponse {
    data?: GenericComic[]
}

export interface TagResponse extends BaseResponse {
    data?: ResponseTagObject[]
}

export interface ResponseTagObject {
    tag_info?: TagInfo,
    comics?: TagComic[]
}

export interface TagInfo {
    name?: string,
    image_url?: string,
    description?: string
}

export interface TagComic {
    name?: string,
    link?: string,
    chapter_status?: string,
    other_names?: OtherName[],
    tags?: Tag[],
    views?: number,
    id?: number
}

export interface SearchResponse extends BaseResponse {
    data?: GenericComic[]
}

export interface UserResponse extends BaseResponse {
    data?: UserResponseObject
}

export interface UserResponseObject extends BaseResponse {
    user?: User,
    waifu?: Waifu[],
    uploaded_comics?: UploadedComic[],
    latest_comments?: LatestComment[]
}

export interface User {
    username?: string,
    avatar_url?: string,
    main_badge?: Badge,
    forum_link?: string,
    gender?: string,
    joined?: Joined,
    comments?: number,
    likes?: number,
    yen?: number,
    badges_list_link?: string,
    badges?: Badge[],
    introduction?: string
}

export interface Badge {
    name?: string,
    image_url?: string,
    description?: string,
}

export interface Joined {
    time?: string,
    date?: string
}

export interface Waifu {
    name?: string,
    current_level?: number,
    max_level?: number,
    hearts?: string,
    description?: string
}

export interface UploadedComic {
    name?: string,
    link?: string,
    id?: string,
    chapter_status?: string,
    other_names?: OtherName[],
    tags?: Tag[]
}

export interface LatestComment {
    time?: string,
    content?: string,
    comic?: LatestCommentComic
}

export interface LatestCommentComic {
    name?: string,
    link?: string,
    id?: number
}