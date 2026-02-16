import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const PopUp=(props, initialIndex = 0) => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
      <Modal.Body style={{ padding: 0 }}>
         <Swiper
          modules={[Navigation, Pagination]}
          initialSlide={initialIndex}
        //   navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          style={{
            height: '100%',
            width: '100%',
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
        >
          {props.inspirationItems.map((image, index) => (
            <SwiperSlide key={index}>
              <div style={{ 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                background: '#000'
              }}>
                <img
                  src={image.img}
                  alt={`Slide ${index + 1}`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Modal.Body>
      
    </Modal>
  );
}
export default PopUp;
