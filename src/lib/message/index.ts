export default interface MessageType{
    id:number,
    text:string,
    senderId:number,
    receiverId:number,
    replayId:number|null,
    isRemoved:boolean
    chatId:number,
    createdDate:Date
}