export interface  User {
    email: string
    password: string
}

export interface Message {
    message: string
}

export interface Tom {
    id?: string
    name: string
    year: number
    number: number
    description: string
    document: string
}

export interface Article {
    id?: string
    author?: string
    title: string
    number: string
    key_words?: string
    pages?: string
    summary?: string
    summary_en?: string
    document?: string
}
