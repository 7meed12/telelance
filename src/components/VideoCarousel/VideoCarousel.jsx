import Carousel from 'react-bootstrap/Carousel';


function VideoCarousel({ videos }) {
    return (
        <Carousel controls={true} >
            {
                videos.map((item) => {
                    return (
                        <Carousel.Item>
                             <iframe width="560" height="515" src={item} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        </Carousel.Item>
                    )
                })
            }

        </Carousel>
    );
}

export default VideoCarousel;