import { Github } from 'lucide-react';
import { useState, useEffect } from 'react';

export function MyFooter() {
    const [dataGithub, setDataGithub] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('https://api.github.com/users/arthurferreira-dev'); // Pega as resposta do json da api do github
                if (!response.ok) throw new Error('Erro na resposta da API');
                const jsonResult = await response.json(); // ele converte em .json
                setDataGithub(jsonResult);
            } catch (err) {
                console.error('Erro ao buscar o seu usuário na API do Github:', err);
                setError(err.message);
            }
        }

        getData();
    }, []);

    return (
        <footer>
            <div className="flex justify-center my-3">
                {error ? (
                    <p className="text-red-500">Erro ao carregar usuário do GitHub.</p>
                ) : dataGithub ? (
                    <p className="flex items-center text-xl font-alan gap-2">
                        <Github /> <strong className="font-bold">Feito por:</strong>
                        <a
                            href={dataGithub.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                             {dataGithub.login}
                        </a>
                    </p>
                ) : (
                    <p className="text-gray-500">Carregando autor...</p>
                )}
            </div>
        </footer>
    );
}