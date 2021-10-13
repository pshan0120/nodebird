import React from "react";
import "antd/dist/antd.css";
import ProsTypes from "prop-types";
import Head from "next/head";
import wrapper from "../store/configureStore";

const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet={"utf-8"} />
                <title>NodeBird</title>
            </Head>
            <Component />
        </>
    );
};

NodeBird.propTypes = {
    Component: ProsTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
