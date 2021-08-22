export interface VKProfile {
    id: number
    name?: string | null
    email?: string | null
    image?: string | null
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
