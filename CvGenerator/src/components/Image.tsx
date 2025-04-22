interface ImageProps {
    src: string;
    alt: string;
}

export default function Image({src, alt}: ImageProps)
{
    return (
        <picture>
            <img src={src} alt={alt} />

        </picture>

    )
}