import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import Head from "next/head";

const imgStyles = {
    marginLeft: 0,
    marginRight: 0,
    width: "140vw",
    height: "100vh",
    objectFit: "cover",
};

export default function Home() {
    const flickityOptions = {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        // setGallerySize: false,
    };

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta name="description" content="App de teste" />
                <meta name="theme-color" content="#000" />
                <title>Alan`s Flicky</title>
                <link rel="manifest" href="/manifest.json" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    href="/apple-touch-icon.png"
                ></link>
            </Head>
            <Flickity
                className={"carousel"} // default ''
                elementType={"div"} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
            >
                <CustomImage style={imgStyles} src="/image01.jpg" />
                <CustomVideo style={imgStyles} src="/video01.webm" />
                <CustomImage style={imgStyles} src="/image02.jpg" />
                <CustomVideo style={imgStyles} src="/video02.webm" />
                <CustomImage style={imgStyles} src="/image03.jpg" />
            </Flickity>
        </div>
    );
}
/**
 *
 * Componentes de imagem e video customizados.
 * Acho melhor colocá-los em outra pasta e importar.
 */
function CustomImage(props) {
    return (
        <picture>
            <source srcSet={props.src} type="image/webp" />
            <img style={props.style} src={props.src} alt="" />
        </picture>
    );
}

function CustomVideo(props) {
    return (
        <video style={props.style} playsInline autoPlay muted loop>
            <source src={props.src} type="video/webm" />
        </video>
    );
}
