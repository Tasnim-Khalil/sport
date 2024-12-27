import { Box, Container } from "@mui/material";
// import {ArrowForwardIcon} from "@mui/icons-material/ArrowForward";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";

const Hero = () => {
  return (
    <Container sx={{ mt: 2.5, display: "flex", alignItems: "center" }}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
        
          <SwiperSlide>
            <img src="src/images/2db430fab5847282a38c69bae7517f6a.jpg"   style={{ width: "100%", height: "440px" }} alt="" />
          </SwiperSlide>

{/* 
          <SwiperSlide>
            <img src=""   style={{ width: "100%", height: "450px" }} alt="" />
          </SwiperSlide>
           */}
        </Swiper>
          
      

      <Box sx={{ display: { xs: "none", md: "block" } }}>
        {/* <Box sx={{mr:3.5, mt:1, mb: 2}}>
          <img
            src="src/images/31a73e5106322d8b5bcb1771aafb4021.jpg"
            style={{ width: "300px", height: "175px" }}
            alt=""
          />
        </Box> */}

        <Box sx={{mr:8,mt:0.3, mb: 0.5}}>
          <img
            src="src/images/6081791eaa7ee67953e2da55f862b271.jpg"
          
            style={{ width: "300px", height: "440px"}}
            alt=""
          />
        </Box>
      </Box>

      
    </Container>
  );
};

export default Hero;
