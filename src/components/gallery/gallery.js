import React, {Component} from "react";
import './gallery.scss'
import GalleryItem from "./gallery-item";
import {withFreedomstoreService} from "../hoc";
import Spinner from "../spinner";

class Gallery extends Component{
    state={
        loading:true,
        galBD:[]
    }
    componentDidMount() {
        this.props.freedomstoreService.getGalleryItems().then((galBD)=>{
            this.setState({galBD:galBD,
                loading:false})
        })

    }

    render() {
        const {loading,galBD}=this.state;
        const spinner =  loading?<Spinner/>:null;
        const content = !loading?<GalleryItem galBD={galBD}/>:null;
        // console.log(freedomstoreService.getBlogItems());
        // console.log(this.state.blogDB)
        return <div className="gallery">
            {/*{console.log(this.state)}*/}
            {spinner}
            {content}
        </div>
    }
}

export default withFreedomstoreService()(Gallery);