import { TokenSet } from "next-auth"

export interface VKPlace {
    id: number
    title: string
}

export interface VKProfile {
    id: number
    first_name: string
    last_name: string
    sex: number
    bdate: string
    city: VKPlace
    country: VKPlace
    photo_100: string
    photo_200: string
    photo_max_orig: string
    timezone: string
    email?: string | null
}
export interface VKTokenSet extends TokenSet {
    email: string | null
}

export interface VKProfileResponse {
    response?: [VKProfile]
}
