export default class FreedomstoreService {
    __dbUrlI='http://localhost:1337'
    dataCorrection=(item, db)=> {

        switch (item) {
            case 'gallery_small':
                return {
                    data:db.data.map(body=>{
                        return {
                            id: body.id,
                            title: body.attributes.title,                
                            url:`${this.__dbUrlI+body.attributes.background_image.data.attributes.formats.small.url}`
                               }
                    }),
                    pagination:db.meta.pagination
                }  
                
                   
            
                
            
            default:
                return null

        }
    }
}

// const free =new FreedomstoreService();
// console.log(free.getGalleryItem(3))