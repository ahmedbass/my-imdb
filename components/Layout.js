import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
      <div className="h-screen flex flex-col items-center">
        <Head>
          <title>My IMDB</title>
          <meta name="description" content="My IMDB clone"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <Header/>

        <div className="flex-grow">{props.children}</div>

        <Footer/>
      </div>
  );
};
export default Layout;
