import React,{Component} from "react";
import Pic1 from '../img/_DSC0245.JPG'
import Pic2 from '../img/_DSC0253.JPG'
import Pic3 from '../img/_DSC0131.JPG'
import Pic4 from '../img/_DSC0245.JPG'
import Pic5 from '../img/_DSC0085.JPG'
// import Pic6 from '../img/_DSC0039.JPG'
// import Pic7 from '../img/_DSC0080.JPG'
// import Pic8 from '../img/_DSC0129.JPG'
// import Pic9 from '../img/_DSC0143.JPG'
// import Pic10 from '../img/_DSC0010.JPG'
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