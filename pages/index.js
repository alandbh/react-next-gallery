import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

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
