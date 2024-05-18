export default function MyRandomName(length:number=10){
    const allChar = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    let result = "";
    for(let i=0;i<length;++i){
        const r = Math.floor(Math.random() * (allChar.length-1)) + 1;
        result +=allChar[r];
    }
    return result;
}