const switchPathname = (name, id) => {
    let namePathname = {}
    switch (name) {
        case 'about':
            namePathname = { name: 'Про мене', api: '' };
            break;
        case 'gallery':
            namePathname = { name: 'Галерея', api: `/galerries/${id}` };
            break;
        case 'blog':
            namePathname = { name: 'Блог', api: `/blogs/${id}` };
            break;
        case 'travel':
            namePathname = { name: 'В похід з нами', api: `/on-a-hikes/${id}` };
            break;
        default:
            namePathname = '';
    }
    return namePathname
}
const switchCommit = (name, id) => {
    let namePathname = {}
    switch (name.replaceAll(/[^A-Za-z]/g, "")) {
        case 'about':
            namePathname = {
                urlPost: false,
                urlGet: false,
                urlUpdate: false,
                urlDelete: false
            };
            break;
        case 'gallery':
            namePathname = {
                urlPost: false,
                urlGet: false,
                urlUpdate: false,
                urlDelete: false
            };;
            break;
        case 'blog':
            namePathname = {
                urlPost: `/blogs/${id}/comment-blog`,
                urlGet: `/comment-blogs?filters[blog][id]=${id}`,
                urlUpdate: `/comment-blogs/`,
                urlDelete: `/comment-blogs/`
            }
            break;
        case 'travel':
            namePathname = {
                urlPost: `/on-a-hikes/1/comments`,
                urlGet: `/comment-on-a-hikes?filters[on_a_hike][id]=${id}`,
                urlUpdate: `/comment-on-a-hikes/`,
                urlDelete: `/comment-on-a-hikes/`
            };
            break;
        default:
            namePathname = '';
    }
    return namePathname;
}
export { switchPathname, switchCommit }
