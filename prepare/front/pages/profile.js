import Layout from "../components/Layout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowingList from "../components/FollowingList";
import FollowerList from "../components/FollowerList";

const Profile = () => {
    const followingList = [{nickname: '톰'}, {nickname: '이든'}, {nickname: '스칼렛'}]
    const followerList = [{nickname: '톰'}, {nickname: '이든'}, {nickname: '스칼렛'}]

    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <Layout>
                <NicknameEditForm/>
                <FollowingList header="팔로잉 목록" data={followingList}/>
                <FollowerList header="팔로워 목록" data={followerList}/>
            </Layout>
        </>
    )
}
export default Profile;
