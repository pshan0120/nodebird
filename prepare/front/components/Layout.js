import PropTypes from 'prop-types';
import Link from 'next/link'
import {Col, Input, Menu, Row} from 'antd'
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import {useState} from "react";
import Styled from "styled-components";

const SearchInput = Styled(Input.Search)`
    vertical-align: middle
`

const Layout = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>홈</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton/>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="http://naver.com" target="_blank" rel="noreferrer noopener">네이버</a>
                </Col>
            </Row>

        </div>
    )
}

Layout.propTypes =
    {
        children: PropTypes.node.isRequired,
    }

export default Layout;
