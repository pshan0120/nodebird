import React, { useCallback } from "react";
import Link from "next/link";
import { Button, Form, Input } from "antd";
import Styled from "styled-components";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { loginAction } from "../reducers/user";

const ButtonWrapper = Styled.div`
    margin-top: 10px
`;

const FormWrapper = Styled(Form)`
    padding: 10px
`;

const LoginForm = () => {
    const dispatch = useDispatch();
    const [id, onChangeId] = useInput("");
    const [password, onChangePassword] = useInput("");

    //const [id, setId] = useState("");
    //const [password, setPassword] = useState("");

    // useCallback는 함수를 캐싱
    /*const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);*/

    // useMemo는 값을 캐싱
    // 리렌더링을 하지 않으려면 아래처럼 useMemo를 쓰거나 styled component를 써야 함
    //const buttonWrapperStyle = useMemo(() => ({ marginTop: 10 }), []);

    // onFinish : e.prevent.event가 이미 적용되어 있는 antd 의 속성
    const onSubmitForm = useCallback(() => {
        console.log("logged in");
        //setIsLoggedIn(true);
        dispatch(loginAction({ id, password }));
    }, []);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input
                    name="user-id"
                    value={id}
                    onChange={onChangeId}
                    requierd="true"
                />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input
                    name="user-password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    requierd="true"
                />
            </div>
            {/*<ButtonWrapper style={buttonWrapperStyle}>*/}
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>
                    로그인
                </Button>
                <Link href="/signup">
                    <a>
                        <Button>회원가입</Button>
                    </a>
                </Link>
            </ButtonWrapper>
        </FormWrapper>
    );
};

export default LoginForm;
