import React, { useEffect, useState} from "react";
import './gallery.scss'
import GalleryItem from "./gallery-item";
import {withFreedomstoreService} from "../hoc";
import Spinner from "../spinner";
import {useParams} from "react-router-dom";
// import BlogItem from "../blog/blog-item";
// import {Page} from "../pages";
import PhotoGallery from "./photo-gallery";

// class Gallery extends Component{
//     state={
//         loading:true,
//         galBD:[]
//     }
//     componentDidMount() {
//         this.props.freedomstoreService.getGalleryItems().then((galBD)=>{
//             this.setState({galBD:galBD,
//                 loading:false})
//         })
//
//     }
//
//     render() {
//         const {loading,galBD}=this.state;
//         const spinner =  loading?<Spinner/>:null;
//         const content = !loading?<GalleryItem galBD={galBD}/>:null;
//         // console.log(freedomstoreService.getBlogItems());
//         // console.log(this.state.blogDB)
//         return <div className="gallery">
//             {/*{console.log(this.state)}*/}
//             {spinner}
//             {content}
//         </div>
//     }
// }

const Gallery =(props)=>{
    console.log('here')
    const [id, setId] = useState(null),
        // [loading,setLoading]=useState(true),
        [galleryDb, setGalleryDb] = useState({
            Db: null,
            loading: true
        }),
        [galleryItem, setGalleryItem] = useState(null)
const {id:idParam}=useParams();
    useEffect(() => {
        let cancelled = false;
        const {getGalleryBd, getGalleryItem} = props.freedomstoreService
        const id = +idParam


        console.log(getGalleryBd())
        console.log(galleryDb)
        const res = getGalleryBd();
        !cancelled && setGalleryDb({
            Db: res,
            loading: false
        });
        console.log(galleryDb)
        !cancelled && setId(id);
        console.log(`in id or not ${galleryDb.loading}`)
        if (!!id) {
            console.log(`into id ${getGalleryItem}`)
            const item = getGalleryItem(+id);
            setGalleryItem(item)
        }
        return () => cancelled = true;

    }, [idParam])
    return <div className="gallery">
        {/* {console.log(`id ${typeof (id)}, blogDb ${galleryDb.loading} props.match.params ${props.match.params.id} blogItem ${galleryItem}`)} */}
        {galleryDb.loading && <Spinner/>}
        {(!galleryDb.loading && !id) && <GalleryItem db={galleryDb.Db}/>}

        {!!id && !!galleryItem && <PhotoGallery data={galleryItem}/>}
    </div>
}

export default withFreedomstoreService()(Gallery);
// export default Gallery;
