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
}
export interface VKAccount {
    provider: string
    type: "oauth"
    id: number
    accessToken: string
    accessTokenExpires: number | null
    refreshToken?: string
    idToken?: string
    access_token: string
    expires_in: number
    user_id: number
    email: string | null
}

export interface VKProfileResponse {
    response?: [VKProfile, VKAccount]
}
