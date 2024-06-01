import Carousel from '@/components/Carousel';
import EventComponent from '@/components/EventComponent';
import EventTagComponent from '@/components/EventTagComponent';
import { eventTagList } from '@/config/eventTagList';

const fetchCarousels = async () => {
  return (await fetch('http://localhost:3000/api/carousel', { cache: 'no-cache' })).json();
};

export default async function Home() {
  let carouselData = null;
  try {
    carouselData = await fetchCarousels();
  } catch (error) {
    console.error('Failed to fetch carousel data', error);
  }

  return (
    <main className="w-screen justify-center">
      <Carousel data={carouselData} />
      <div className="flex justify-center">
        <div className="w-11/12 xl:w-9/12 p-2 xl:p-8 flex justify-center">
          <div className="w-full">
            {Array.from(eventTagList).map(([key, value]) => (
              <EventTagComponent keyString={key} name={value} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
