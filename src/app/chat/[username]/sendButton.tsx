
export default function SendButton({socket,id,text,setText}:{socket:any,id:number,text:string,setText:any})
{
    return (
        <button onClick={e =>{
            e.preventDefault();
            
            socket.emit('new message2',id,text);
            setText("");
         }}>ok</button>
    );
}