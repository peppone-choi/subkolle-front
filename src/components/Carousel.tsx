import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { CarouselProps } from '@/types/types';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';

const fetchCarousels = async () => {
  try {
    return (await fetch('http://localhost:3000/api/carousel')).json();
  } catch (error) {
    throw new Error('캐러셀 데이터를 불러오지 못하였습니다.');
  }
};

const Carousel = () => {
  const {
    isLoading,
    data: carouselData,
    isError,
    error,
  } = useQuery({
    queryKey: ['carousel'],
    queryFn: fetchCarousels,
    staleTime: 1000 * 60 * 60,
  });
  return isLoading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : isError ? (
    <div>
      <h1>캐러셀 데이터를 불러오지 못했습니다.</h1>
    </div>
  ) : (
    <Swiper
      centeredSlides={true} //가운데 정렬
      slidesPerView={1} //한 슬라이드에 보여줄 갯수
      spaceBetween={0} //슬라이드간 거리
      loop={true} //슬라이드 반복 여부
      autoplay={{ delay: 5000 }} //자동 슬라이드 시간
      navigation // 이동 화살표
      pagination={{
        dynamicBullets: false,
        clickable: true,
      }} //pager여부
      touchRatio={0}
      modules={[Pagination, Navigation, Autoplay]}>
      {carouselData?.map((carousel: CarouselProps) => (
        <SwiperSlide key={carousel.order}>
          <Link href={carousel.linkTo} key={carousel.order}>
            <div className="h-44 lg:h-[30rem] flex items-center justify-center relative">
              <Image
                src={carousel.imageUrl}
                alt={carousel.title}
                className="object-cover object-center"
                loading="lazy"
                layout="fill"
                typeof="image/avif"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
              <div className="h-full relative flex w-11/12 lg:w-9/12 flex-col justify-center lg:-translate-y-16 px-10">
                <h1 className="text-2xl md:text-4xl lg:text-8xl font-extrabold leading-normal lg:leading-relaxed text-white">
                  {carousel.title}
                </h1>
                <p className="mt-1 md:mt-2 lg:mt-4 text-sm md:text-base lg:text-4xl ml-0.5 md:ml-1 lg:ml-2 text-white">
                  {carousel.description}
                </p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
