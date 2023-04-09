import { useState, useEffect } from "react";

const usePreloadImages = (imageUrls) => {
    const [loadedImages, setLoadedImages] = useState([]);

    useEffect(() => {
        const preloadImages = imageUrls.map((url) => {
            return new Promise((resolve) => {
                const image = new Image();
                image.src = url;
                image.onload = () => {
                    resolve(url);
                };
            });
        });

        Promise.all(preloadImages).then((loadedUrls) => {
            setLoadedImages(loadedUrls);
        });
    }, [imageUrls]);

    return loadedImages;
};

export default usePreloadImages;
