const switchPathname=(name,id)=>{
    let namePathname={}
    switch(name){
        case'about':
        namePathname={name:'Про мене', api:''};
        break;
        case'gallery':
        namePathname={name:'Галерея', api:`/galerries/${id}`};
        break;
        case'blog':
        namePathname={name:'Блог', api:`/blogs/${id}`};
        break;
        case'travel':
        namePathname={name:'В похід з нами', api:`/on-a-hikes/${id}`};
        break;
        default:
            namePathname='';
    }
    return namePathname
}
export default switchPathname