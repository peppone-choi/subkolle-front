import Carousel from '@/components/Carousel';

const fetchCarousels = async () => {
  return (await fetch('http://localhost:3000/api/carousel', { cache: 'no-cache' })).json();
};

export default async function Home() {
  let data = null;
  try {
    data = await fetchCarousels();
  } catch (error) {
    console.error('Failed to fetch carousel data', error);
  }

  return (
    <main className="w-screen justify-center">
      <Carousel data={data} />
      <div className="flex justify-center">
        <div className="w-11/12 xl:w-9/12 p-2 xl:p-8 flex justify-center">
          <div className="rounded-lg bg-slate-300 w-full h-48 shadow-xl">
            <h1 className="m-8 text-2xl font-bold">Under Construction :)</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
