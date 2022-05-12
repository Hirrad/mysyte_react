export default class FreedomstoreService {
    __dbUrlI='http://localhost:1337'
    dataCorrection=(item, db)=> {
// console.log(db.data.attributes.images.data[0].attributes.formats.medium)
console.log(db)
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
                };  
                case 'gallery_images':
                return {
                    data:db.data.attributes.images.data.map(body=>{
                        if(body.attributes.mime==='video/mp4'){
                            return{
                                 id: body.id,
                                 alt: body.attributes.alternativeText,                
                                 url:`${this.__dbUrlI+'/uploads/'+body.attributes.hash+body.attributes.ext}`,
                                 video:true
                                    }

                            
                        }
                             return {
                                 id: body.id,
                                 alt: body.attributes.alternativeText,                
                                 url:`${this.__dbUrlI+'/uploads/medium_'+body.attributes.hash+body.attributes.ext}`,
                                 video:false
                                    }
                         })
                } 
                   
            
                
            
            default:
                return null

        }
    }
}
// `${this.__dbUrlI+'/uploads/medium_'+body.attributes.hash+body.attributes.ext}`
// const free =new FreedomstoreService();
// console.log(free.getGalleryItem(3))
// .attributes.images.data.map(body=>{
//     return {
//         id: body.id,
//         title: body.attributes.title,                
//         url:`${this.__dbUrlI+body.attributes.background_image.data.attributes.formats.small.url}`
//            }
// })photo_2022_04_25_19_35_33_9008b23b2c  /uploads/