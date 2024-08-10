
export default function Item_Text({messageText,date}:
    {messageText:string,date:Date}) {

    return <p 
    >
        {messageText}
        <sub>{`       ${date.getHours()}:${date.getMinutes()}`}</sub>
    </p>
}