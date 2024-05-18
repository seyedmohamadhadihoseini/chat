

export default function Item_Voice({src,isMine}:{src:string,isMine:boolean}){

    return <audio src={`${process.env.NEXT_PUBLIC_HOST}/api/getvoice?name=${src}`} controls={true} className={isMine ? "bg-slate-500" : "float-end bg-orange-500"}/>
}