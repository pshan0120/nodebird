import "antd/dist/antd.css";
import ProsTypes from "prop-types";
import Head from "next/head";

const App = ({ Component }) => {
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

App.propTypes = {
    Component: ProsTypes.elementType.isRequired,
}

export default App;
