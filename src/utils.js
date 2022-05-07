
export const clickOutsideRef = (content_ref, toggle_ref) => {
    document.addEventListener('mousedown', (e) => {
        // user click toggle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle('active')
        } else {
            // user click outside toggle and content
            if (content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove('active')
            }
        }
    })
}

export const paginate = (followers) => {
    // tao so luong item cua moi page
    const itemsPerPage = 10
    // tinh so page cua followers
    const numberOfPages = Math.ceil(followers.length / itemsPerPage)
    // tao page moi
    const newFollowers = Array.from({length:numberOfPages} ,(_,index) => {
        const start = index * itemsPerPage
        return followers.slice(start,start + itemsPerPage)
    })
    // tra ve kq
    return newFollowers
}
