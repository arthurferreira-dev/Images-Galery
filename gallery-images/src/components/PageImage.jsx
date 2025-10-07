import { ChevronLeftIcon, Eye, ThumbsUp, Download } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { MyFooter } from "./Footer";

export default function PageImage() {
    const [searchParams] = useSearchParams();
    const src = searchParams.get('src');
    const pageURL = searchParams.get('pageURL');
    const user = searchParams.get('user');
    const likes = searchParams.get('likes');
    const views = searchParams.get('views');
    const downloads = searchParams.get('downloads');

    const navigate = useNavigate();
    const navigator = (pageURL) => {
        return window.location.href = pageURL;
    }

    const Lis = ( { children } ) => {
        return (
            <li className="flex gap-2 items-center">{children}</li>
        );
    }

    return (
        <>
            <div className="w-[500px] max-[501px]:w-[100%] mx-auto bg-gray-400 border-3 border-black min-[540px]:rounded-lg p-4 space-y-3 font-alan">
                <img src={src} alt={`creator-${user}`} className="rounded-md shadow hover:cursor-pointer" onClick={() => navigator(pageURL)} />
                <h2 className="text-center text-xl">
                    <strong className="font-bold">Criado por:</strong> {user}
                </h2>
                <ul className="text-center text-lg flex flex-col flex-wrap items-center gap-3">
                    <Lis><ThumbsUp/> {likes}</Lis>
                    <Lis><Eye/> {views}</Lis>
                    <Lis><Download/> {downloads}</Lis>
                </ul>
                <div className="flex justify-center my-3">
                    <button
                        className="flex justify-center items-center text-xl font-alan gap-2 bg-green-500 p-2 w-[150px] rounded-md duration-300 hover:bg-green-600 hover:cursor-pointer"
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