import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import './photo-gallery.scss'
import LazyLoad from 'react-lazyload';
import {SRLWrapper} from "simple-react-lightbox";
import {withFreedomstoreService} from "../../hoc";
import Spinner from "../../spinner";


// class PhotoGallery extends Component {
//     state = {
//         loading: true,
//         galBD: [],
//         photosDB:[],
//         id: ''
//     }
//
//     componentDidMount() {
//         const id=+this.props.match.params.id
//             this.props.freedomstoreService.getGalleryItem(id).then((galBD) => {
//                  this.setState({
//                     galBD: galBD,
//                     loading: false,
//                      id:id
//                 })
//             })
//
//     }
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         const id=+this.props.match.params.id
//         if(prevState.id !==id){
//             this.setState({
//                 loading: true,
//             })
//             // console.log("попал")
//             this.props.freedomstoreService.getGalleryItem(id).then((galBD) => {
//                 this.setState({
//                     galBD: galBD,
//                     loading: false,
//                     id:id
//                 })
//             })
//
//         }
//
//     }
//
//     render() {
//
//         const {loading, galBD} = this.state;
//         // console.log(this.state)
//         const spinner = loading ? <Spinner/> : null;
//         const content = !loading ? <PhotoItem galBD={galBD} /> : null;
//         // console.log(freedomstoreService.getBlogItems());
//         return <div className="photos">
//             {spinner}
//             {content}
//         </div>
//     }
// }
//
// const PhotoItem = ({galBD,id}) => {
//     // console.log(galBD)
//     return <SRLWrapper>
//         <div className="photos_wrapper">
//             <LazyLoad height={100}>
//             {galBD.img_gallery.map((body, index) => {
//                 return <div className="photos_img" key={index}>
//                     <img src={body} alt=""/>
//                 </div>
//             })}
//                 </LazyLoad>
//         </div>
//     </SRLWrapper>
// }
//
// export default withFreedomstoreService()(withRouter(PhotoGallery));
const PhotoGallery = ({data}) => {
    return <SRLWrapper>
        <div className="photos_wrapper">
            <LazyLoad height={100}>
                {data.img_gallery.map((body, index) => {
                    return <div className="photos_img" key={index}>
                        <img src={body} alt=""/>
                    </div>
                })}
            </LazyLoad>
        </div>
    </SRLWrapper>

}

export default PhotoGallery;