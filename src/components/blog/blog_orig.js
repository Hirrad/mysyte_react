import React, {Component} from "react";

import './blog.scss'
import BlogItem from "./blog-item";
import {withFreedomstoreService} from "../hoc";
import Spinner from "../spinner";
import {withRouter} from "react-router-dom";
import {Page} from "../pages";


class Blog_orig extends Component {
    state = {
        loading: true,
        blogDB: null,
        id: null,
        blogItem: null

    }

    componentDidMount() {
        console.log(`into didMount ${this.state.blogItem}`)
        const id = +this.props.match.params.id;
        // const {blogDB}=this.state
        // if(id&&blogDB){
        //     this.getBlogItem(id,blogDB)
        // }

        this.props.freedomstoreService.getBlogItems().then((blogDB) => {

            this.setState({
                blogDB: blogDB,
                loading: false,
                id:id,
                blogItem: this.getBlogItem(id, blogDB)


            })
            // if (id && blogDB) {
            //     console.log(`попал в айди база ${blogDB} айди ${id}`)
            //     this.setState({blogItem: this.getBlogItem(id, blogDB)})
            // }
        })
        // if (id) {
        //     this.setState({
        //         id: id,
        //         blogItem:this.getBlogItem(this.props.match.params.id,this.state.blogDB)
        //
        //     })
        // }
        // this.getBlogItem(this.props.match.params.id,this.state.blogDB)
        console.log(`out didMount`)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        console.log(`into didUpdate`)
        console.log(`prevProps id:${prevProps}  prevState id ${prevState.id}
        prevState blogDB ${prevState.blogDB} prevState blogDB ${prevState.blogDB}`)
        const {blogDB, blogItem} = this.state
        const id = +this.props.match.params.id;
        console.log(!!id)
        if (this.state.id !== 0 && prevState.id !== +id&&id) {
            console.log(this.state);
            console.log(`into didUpdate blogItem ${blogItem}, blogDB ${blogDB}`)
            this.setState({
                id:id,
                loading:true

            })
            this.getBlogItem(id, blogDB)


        }
        console.log(`out didUpdate`)
    }

    componentWillUnmount() {
        console.log(`into didUnmount`)
        this.setState({
            loading: true
        })
    }

    getBlogItem=(id, blogItem)=> {
        console.log(`id ${id} db ${blogItem}`);
        const blog = blogItem;
        console.log(blog);
        this.setState({
            blogItem: blogItem.find((body) => body.id === id),
            loading:false
            // blogItem:blogItem
        })

    }

    render() {
        const {loading, blogDB, blogItem,id} = this.state;
        // const id=+this.props.match.params.id;
        console.log(`loading  ${loading} !loading && !id ${!loading && !id} !loading && !!id ${!loading && !!id}`);
//         console.log(`id  ${id}`);
//         console.log(`булиан ! ${!id}`);
// console.log(`булиан !! ${!!id}`);
        const spinner = loading ? <Spinner/> : null;
        const content = (!loading && !!id) ? <BlogItem blogItemDb={blogDB}/> : null;
        const contentTextBlog = (!loading && !id) ? <Page blogItem={blogItem}/> : null;
        // console.log(freedomstoreService.getBlogItems());
// console.log(this.state.blogDB)
        return <div className="wrapper_blog">
            {/*{console.log(this.state)}*/}
            {spinner}
            {content}
            {contentTextBlog}
        </div>
    }
}

export default withRouter(withFreedomstoreService()(Blog_orig));