import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import './photo-gallery.scss'
import LazyLoad from 'react-lazyload';

import {SRLWrapper} from "simple-react-lightbox";
import {withFreedomstoreService} from "../../hoc";
import Spinner from "../../spinner";
import GalleryItem from "../gallery-item";


const PhotoGallry = ({match}) => {
    // const {img_gallery} = props.location.state
    console.log(match)
    return <div className="photos">
        <SRLWrapper>
            <div className="photos_wrapper">
                {/*{console.log(img_gallery)}*/}
                {/*{img_gallery.map((body,index)=>{*/}
                {/* return   <div className="photos_img" key={index}>*/}

                {/*        <img src={body} alt=""/>*/}

                {/*    </div>*/}
                {/*})}*/}
            </div>
        </SRLWrapper>
    </div>


}

class PhotoGallery extends Component {
    state = {
        loading: true,
        galBD: [],
        photosDB:[],
        id: ''
    }

    componentDidMount() {
        const id=+this.props.match.params.id
        // this.setState({id})
            this.props.freedomstoreService.getGalleryItem(id).then((galBD) => {
                 this.setState({
                    galBD: galBD,
                    loading: false,
                     id:id
                })
            })



    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        const id=+this.props.match.params.id
        if(prevState.id !==id){
            this.setState({
                loading: true,
            })
            console.log("попал")
            this.props.freedomstoreService.getGalleryItem(id).then((galBD) => {
                this.setState({
                    galBD: galBD,
                    loading: false,
                    id:id
                    // photosDB:galBD.find((body)=> body.id==id)
                })
            })
            //     .then(()=>{
            //     const {galBD,id }=this.state
            //     console.log(`getPh ${galBD} and ${id}`)
            //     const Db=galBD.filter((body)=> body.id===id)
            //     console.log(`DB ${Db} `)
            //     this.setState({
            //         photosDB:Db
            //     })
            // })
            // this.getPhotosID();
        }

    }
getPhotosID(Bd,id){
        // const {galBD,id }=this.state
    console.log(`getPh ${Bd} and ${id}`)
    const Db=Bd.find((body)=>body.id=id)
    console.log(`DB ${Db} `)
    this.setState({
        photosDB:Db
    })
  return Bd.find((body)=>body.id===id)
}
    render() {

        const {loading, galBD,id,photosDB} = this.state;
        console.log(this.state)
        const spinner = loading ? <Spinner/> : null;
        const content = !loading ? <PhotoItem galBD={galBD} /> : null;
        // console.log(freedomstoreService.getBlogItems());
        return <div className="photos">
            {spinner}
            {content}
            {/*<SRLWrapper>*/}
            {/*    <div className="photos_wrapper">*/}
            {/*        {console.log(img_gallery)}*/}
            {/*        {img_gallery.map((body,index)=>{*/}
            {/*         return   <div className="photos_img" key={index}>*/}

            {/*                <img src={body} alt=""/>*/}

            {/*            </div>*/}
            {/*        })}*/}
            {/*    </div>*/}
            {/*</SRLWrapper>*/}
        </div>
    }
}

const PhotoItem = ({galBD,id}) => {
    console.log(galBD)
    return <SRLWrapper>
        <div className="photos_wrapper">
            <LazyLoad height={100}>
            {galBD.img_gallery.map((body, index) => {
                return <div className="photos_img" key={index}>
                    <img src={body} alt=""/>
                </div>
            })}
                </LazyLoad>
        </div>
    </SRLWrapper>
}

export default withFreedomstoreService()(withRouter(PhotoGallery));
