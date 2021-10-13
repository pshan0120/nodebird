export const initialState = {
    mainPosts: [
        {
            id: 1,
            User: {
                id: 1,
                nickname: "Chandy",
            },
            content: "첫번째 게시글 #해시태그 #익스프레스",
            Images: [
                {
                    src: "https://imgnews.pstatic.net/image/003/2021/10/13/NISI20211013_0000845095_web_20211013090640_20211013095009501.jpg?type=w647",
                },
                {
                    src: "https://imgnews.pstatic.net/image/003/2021/10/13/NISI20210506_0000740973_web_20210506084307_20211013095009497.jpg?type=w647",
                },
                {
                    src: "https://imgnews.pstatic.net/image/629/2021/10/13/202176491634091180_20211013111837425.jpg?type=w647",
                },
            ],
            Comments: [
                {
                    User: {
                        nickname: "tom",
                    },
                    content: "good~",
                },
                {
                    User: {
                        nickname: "eden",
                    },
                    content: "no good~",
                },
            ],
        },
    ],
    imagePaths: [],
    postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
    type: ADD_POST,
};

const dummyPost = {
    id: 2,
    content: '가짜데이터',
    User: {
        id: 1,
        nickname: '웬디'
    },
    Images: [],
    Comments: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true
            }
        default:
            return state;
    }
};

export default reducer;
