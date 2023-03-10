

export const goToLogin = (navigator) => {
    navigator("/login")
}

export const goToPost = (navigator) => {
    navigator("/post")
}

export const goToFeed = (navigator) => {
    navigator("/feed")
}

export const goToRecipeDetail = (navigator, id) => {
    navigator(`/recipe/${id}`)
}

export const goToSignup = (navigator) => {
    navigator("/signup")
}