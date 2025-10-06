import { useEffect, useState } from "react";
import { Images } from "./components/images";
import { Camera } from 'lucide-react';

export default function App() {
  const pixabay_key = '52624653-fa162769090b690bf909e6a91';
  const [photos, setPhotos] = useState([]);

  const fetchPixabay = async (q) => {
    const pages = '30'
    const url = `https://pixabay.com/api/?key=${pixabay_key}&q=${encodeURIComponent(q)}&image_type=photo&per_page=${pages}`;
    const res = await fetch(url);
    const json = await res.json();
    setPhotos(json.hits);
    return json.hits;
  };

  useEffect(() => {
    const fetchData = async () => {
      const results = await fetchPixabay('all');
      console.log(results);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-center text-2xl font-alan my-3">
        <Camera/> Photos Gallery
      </h1>
      <div
        className="grid grid-cols-4 max-[657px]:grid-cols-2 max-[810px]:grid-cols-3 min-[1114px]:grid-cols-4 gap-6 items-start justify-center mx-auto mt-4 bg-zinc-400 p-5 shadow"
      >
        <Images photos={photos}/>
      </div>
    </>
  );
}