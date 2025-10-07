import { useNavigate } from 'react-router-dom'

export function Images( { photos } ) {
    const navigate = useNavigate();

    const PageImage = (photo) => {
        const query = new URLSearchParams();
        query.set('src', photo.webformatURL);
        query.set('pageURL', photo.pageURL);
        query.set('user', photo.user);
        query.set('likes', photo.likes);
        query.set('views', photo.views);
        query.set('downloads', photo.downloads);
        navigate(`/image?${query.toString()}`);
    }

    return (
        <>
            {photos.length === 0 ? ( <p className="text-gray-500">Carregando imagens...</p> ) : (
                    photos.map((photo) => (
                        <img
                            key={photo.id}
                            src={photo.webformatURL}
                            alt={photo.tags}
                            loading="lazy"
                            onClick={() => PageImage(photo)}
                            className="rounded-lg object-cover w-full h-40 overflow-hidden transition-transform duration-300 hover:scale-110 hover:cursor-pointer"
                        />
                    ))
                )}
        </>
    );
}