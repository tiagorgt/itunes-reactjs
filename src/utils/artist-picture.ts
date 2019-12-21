import axios from 'axios';

export function getArtistPictureUrl(artistUrl: string, highQuality?: boolean): Promise<string> {
    return new Promise((resolve) => {
        axios.get(artistUrl).then(response => {
            let imageUrl: string | null = null;

            let doc = new DOMParser().parseFromString(response.data, 'text/html');
            let element = doc.querySelector('meta[property="og:image"]');

            if (element) {
                imageUrl = element.getAttribute('content');

                if (imageUrl) {
                    imageUrl = imageUrl.substring(0, imageUrl.lastIndexOf('/') + 1) + (highQuality ? '10000x10000-999.jpg' : '120x120.jpg')
                }
            }

            resolve(imageUrl || `${process.env.PUBLIC_URL}/assets/img/apple-music.png`);
        });
    });
}