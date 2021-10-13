import React from "react";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

const Home = () => {
    const { isLoggedIn } = useSelector((state) => state.user);
    const { mainPosts } = useSelector((state) => state.post);
    return (
        <Layout>
            {isLoggedIn && <PostForm />}
            {mainPosts.map((post) => <PostCard key={post.id} post={post}/>)}
        </Layout>
    );
};
export default Home;
