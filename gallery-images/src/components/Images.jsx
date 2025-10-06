export function Images( { photos } ) {
    return (
        <>
            {photos.map((photo) => (
                <img 
                    key={photo.id} 
                    src={photo.webformatURL} 
                    alt={photo.tags} 
                    onClick={() => window.location.href = photo.pageURL}
                    className="rounded-lg object-cover w-full h-40 overflow-hidden transition-transform duration-300 hover:scale-110 hover:cursor-pointer" 
                />
            ))}
        </>
    );
}