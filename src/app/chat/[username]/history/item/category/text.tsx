
export default function Item_Text({isMine,messageText,date}:
    {isMine:boolean,messageText:string,date:Date}) {

    return <p className={isMine ? "bg-slate-500" : "float-end bg-orange-500"}
    >
        {messageText}
        <sub>{`       ${date.getHours()}:${date.getMinutes()}`}</sub>
    </p>
}