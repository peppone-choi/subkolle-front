import Carousel from '@/components/Carousel';

const fetchCarousels = async () => {
  return (await fetch('http://localhost:3000/api/carousel', { cache: 'no-cache' })).json();
};

export default async function Home() {
  let data = null;
  try {
    data = await fetchCarousels();
  } catch (error) {}

  return (
    <main className="w-screen justify-center">
      <Carousel data={data} />
      <div className="flex justify-center">
        <div className="w-11/12 xl:w-9/12 p-2 xl:p-8">
          <p>This is Mainpage ;)</p>
        </div>
      </div>
    </main>
  );
}
