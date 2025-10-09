import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const navigate = useNavigate();
    return (
        <div className="w-screen h-screen bg-white flex flex-col flex-wrap justify-center items-center gap-4">
            <h1 className="font-poppins text-3xl text-red-600">Error 404 :(</h1>
            <p className="text-lg text-justify">
                Erro ao carregar os dados via URL (<em className="italic">GET</em>), porfavor volte a página inicial.
            </p>
            <button
                className="p-2 bg-green-500 duration-300 rounded-md text-white text-center w-[125px] hover:bg-green-600 hover:cursor-pointer"
                onClick={() => navigate(-1)}
            >
                Voltar
            </button>
        </div>
    );
}