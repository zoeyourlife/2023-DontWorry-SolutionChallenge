import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";

function Carousel() {
  const carouselImages = [
    { title: "NO SILENCE", src: "/images/mainNoSilence.jpg" },
    { title: "COUNSEL", src: "/images/mainCounsel.jpg" },
    { title: "JUST BE CONFIDENT", src: "/images/mainKids.jpg" },
    { title: "BELIEVE", src: "/images/mainBelieve.jpg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    pauseOnHover: true,
    centerPadding: "0px",
  };

  return (
    <StyledWrapper>
      <StyledCarousel {...settings}>
        {carouselImages.map((item, i) => (
          <StyledItem key={i}>
            <StyledTitle>{item.title}</StyledTitle>
            <StyledImg>
              <Image
                alt="carousel img"
                src={item.src}
                width={100}
                height={100}
                layout="responsive"
              />
            </StyledImg>
          </StyledItem>
        ))}
      </StyledCarousel>
    </StyledWrapper>
  );
}

export default Carousel;

const StyledWrapper = styled.div`
  position: relative;
  width: 85%;
  height: auto;
  z-index: 0;
`;

const StyledCarousel = styled(Slider)`
  .slick-list {
    width: 100%;
    margin: 0 auto;
  }
  .slick-slide div {
    cursor: pointer;
  }
  .slick-dots {
    bottom: -2.2rem;
  }
  .slick-dots li button:before {
    color: ${({ theme }) => theme.color.white};
  }
`;

const StyledItem = styled.div`
  position: relative;
  border-radius: 26px;
  background-color: ${({ theme }) => theme.color.borderBackground};
  opacity: background-color 0.2;
  padding: 0 0.8rem 0.7rem 0.8rem;
`;

const StyledImg = styled.div`
  position: relative;
  object-fit: cover;
  width: auto;
  height: auto;
  border-radius: 26px;
  overflow: hidden;
`;

const StyledTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 3.1rem;
  
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.grey100};
`;
