import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { MyFooter } from "./Footer";
import { ChevronLeftIcon, Eye, ThumbsUp, Download, ArrowDownToLine } from "lucide-react";

export default function PageImage() {
    const [searchParams] = useSearchParams();
    const src = searchParams.get('src');
    const pageURL = searchParams.get('pageURL');
    const user = searchParams.get('user');
    const userID = searchParams.get('userID');
    const likes = searchParams.get('likes');
    const views = searchParams.get('views');
    const downloads = searchParams.get('downloads');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const navigator = (pageURL) => {
        return window.location.href = pageURL;
    }

    const Lis = ( { children } ) => {
        return (
            <li className="flex gap-2 items-center">{children}</li>
        );
    }

    const DowloandImg = async (imageURL) => {
        setLoading(true)

        try {
            const res = await fetch(imageURL);
            const bob = await res.blob();
            const urlBob = URL.createObjectURL(bob);
    
            const link = document.createElement('a');
            link.href = urlBob
            link.download = `${user}-pixabay.jpg`
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(urlBob);
        } catch (error) {
            console.error('Error ao baixar a imagem:', error);
        } finally {
            setLoading(false)
        }
    }

    const ButtonsCL = 'flex justify-center items-center text-xl font-alan gap-2 p-2 w-[150px] rounded-md duration-300 hover:cursor-pointer'
    const SVGcircle = () => {
        return (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
        );
    }

    return (
        <>
            <div className="w-[500px] max-[501px]:w-[100%] mx-auto bg-gray-400 border-3 border-black min-[540px]:rounded-lg p-4 space-y-3 font-alan">
                <img src={src} alt={`creator-${user}`} className="rounded-md shadow block mx-auto hover:cursor-pointer" onClick={() => navigator(pageURL)} />
                <h2 className="text-center text-xl">
                    <strong className="font-bold">Criado por:</strong> <span className="hover:underline hover:cursor-pointer" onClick={() => navigator(`https://pixabay.com/users/${user}-${userID}`)}>{user}</span>
                </h2>
                <ul className="text-center text-lg flex flex-col flex-wrap items-center gap-3">
                    <Lis><ThumbsUp/> {likes}</Lis>
                    <Lis><Eye/> {views}</Lis>
                    <Lis><Download/> {downloads}</Lis>
                </ul>
                <div className="flex justify-center my-3">
                    <button
                        className={`${ButtonsCL} bg-sky-500 hover:bg-sky-600`}
                        onClick={() => DowloandImg(src)}
                    >
                        {loading ? (
                            <span className="flex items-center gap-2">
                                <SVGcircle/>
                                Carregando...
                            </span>
                        ) : (
                            <>
                                <ArrowDownToLine/> Baixar Imagem
                            </>
                        )}
                    </button>
                </div>
                <div className="flex justify-center my-3">
                    <button
                        className={`${ButtonsCL} bg-green-500 hover:bg-green-600`}
                        onClick={() => navigate(-1)}
                    >
                        <ChevronLeftIcon/> Voltar
                    </button>
                </div>
            </div>
            <MyFooter/>
        </>
    );
}