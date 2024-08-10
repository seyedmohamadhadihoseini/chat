

export default function Item_Voice({ src }: { src: string }) {
    return <audio src={`${process.env.NEXT_PUBLIC_HOST}/api/getvoice?name=${src}`} controls />
}