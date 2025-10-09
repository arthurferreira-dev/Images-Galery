import { useEffect, useState } from "react";
import { ImagesPixabay } from "./components/Images.jsx";
import { MyFooter } from "./components/Footer"; 
import { Camera } from 'lucide-react';

export default function App() {
  const pixabay_key = '52624653-fa162769090b690bf909e6a91';
  const [photos, setPhotos] = useState([]);
  const [stateFetch, setStateFetch] = useState(localStorage.getItem('state') || 'all');

  const fetchPixabay = async (q) => {
    const pages = '32'
    const url = `https://pixabay.com/api/?key=${pixabay_key}&q=${encodeURIComponent(q)}&image_type=photo&per_page=${pages}`;
    const res = await fetch(url);
    const json = await res.json();
    setPhotos(json.hits);
  };

  useEffect(() => {
    const fetchData = async (stateFetch) => {
      const results = await fetchPixabay(stateFetch);
      console.log(results);
    };

    fetchData(stateFetch);
    localStorage.setItem('state', stateFetch);
  }, [stateFetch]);

  const ButtonsCL = 'p-2 border-black bg-white border-t-2 border-b-2 text-center hover:cursor-pointer'

  return (
    <>
      <div className="flex justify-center my-3">
        <h1 className="flex items-center text-2xl font-alan gap-2">
          <Camera /> Photos Gallery
        </h1>
      </div>
      <div className="w-full flex justify-center mt-4">
        <div className="font-poppins">
          <button onClick={() => setStateFetch("popular")} className={`border-r-2 border-l-2 rounded-tl-md rounded-bl-md ${ButtonsCL}`}>
            Popular
          </button>
          <button onClick={() => setStateFetch("all")} className={ButtonsCL}>
            Todas
          </button>
          <button onClick={() => setStateFetch("latest")} className={`border-l-2 border-r-2 rounded-tr-md rounded-br-md ${ButtonsCL}`}>
            Últimas
          </button>
        </div>
      </div>
      <div
        className="grid grid-cols-4 max-[657px]:grid-cols-2 max-[810px]:grid-cols-3 min-[1114px]:grid-cols-4 gap-6 items-start justify-center mx-auto mt-4 bg-zinc-400 p-5 shadow"
      >
        <ImagesPixabay photos={photos}/>
      </div>
      <MyFooter/>
    </>
  );
}