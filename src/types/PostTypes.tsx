interface LatestPostResponse {
    data: SinglePost,
}

interface SinglePost {
    id: number,
    user: User,
    user_id: number,
    content: string,
    created_at: string,
    updated_at: string,
    likes: LikingUser[],
}

interface User {
    avatar_url: string,
    username: string,
}

interface LikingUser {
    avatar_url: string,
    created_at: string,
    updated_at: string | null,
    email: string,
    id: number,
    pivot: Pivot,
    username: string,
}

interface Pivot {
    created_at: string,
    updated_at: string | null,
    post_id: string,
    user_is: string,
}

export type { LatestPostResponse, SinglePost, User, LikingUser, Pivot };
