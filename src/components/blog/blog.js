import React,{Component} from "react";

import './blog.scss'
import BlogItem from "./blog-item";
import {withFreedomstoreService} from "../hoc";
import Spinner from "../spinner";


class Blog extends Component{
state={
    loading:true,
    blogDB:[]
}
componentDidMount() {
    this.props.freedomstoreService.getBlogItems().then((blogDB)=>{
        this.setState({blogDB:blogDB,
            loading:false})
    })
}
    render() {
        const {loading,blogDB}=this.state;
        const spinner =  loading?<Spinner/>:null;
        const content = !loading?<BlogItem blogItemDb={blogDB}/>:null;
        // console.log(freedomstoreService.getBlogItems());
// console.log(this.state.blogDB)
        return <div className="wrapper_blog">
            {/*{console.log(this.state)}*/}
            {spinner}
            {content}
        </div>
    }
}

    export default withFreedomstoreService()(Blog);