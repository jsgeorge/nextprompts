export async function GET(request){

    const posts = [
        {id: 1, title:"My first post"},
        {id: 2, title:"Second post"},
        {id: 3, title:"thred post"}
    ]
    return new Response(JSON.stringify(posts))
}