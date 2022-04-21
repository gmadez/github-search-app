export type ResultType = "User" | "Organization";

export interface SearchResult {
    login: string
    id: string
    avatar_url?: string
    url?: string
    type: ResultType
    html_url?: string
}
