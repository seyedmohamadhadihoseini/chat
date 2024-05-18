

export default function Item_Voice({src,isMine}:{src:string,isMine:boolean}){
    return <audio src={`/users/voice/${src}`} controls={true} className={isMine ? "bg-slate-500" : "float-end bg-orange-500"}/>
}