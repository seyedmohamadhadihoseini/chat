import { AudioRecorder } from "react-audio-voice-recorder";

export function Send_Button({ SendHandler }: { SendHandler: Function }) {

    return <button type="button"
        className="text-gray-900 bg-gradient-to-r from-red-200
via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4
focus:outline-none focus:ring-red-100 dark:focus:ring-red-400
font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 w-11/12 h-full rounded-full"
        onClick={async (e) => {
            await SendHandler();
        }}
    >
        Send
    </button>
}


export function Send_TextArea({ setText, txt, SendHandler }: { setText: Function, txt: string, SendHandler: Function }) {

    return <textarea
        className="form-control bg-blue-100 focus:bg-blue-300 text-input focus:outline-0 resize-none rounded-md w-full"
        placeholder="Enter text here..."
        autoFocus
        id="text-input"
        name="message"
        value={txt}
        onChange={e => setText(e.target.value)}
        onKeyDown={async (e) => {
            if (e.key === "Enter" && !e.shiftKey && txt.length > 0) {
                e.preventDefault();
                await SendHandler();
            }

        }}

    />
}
import ReplyIcon from '@mui/icons-material/Reply';
import CloseIcon from '@mui/icons-material/Close';
import { SendVoiceAction } from "../action";
import MyBroker from "@/broker/MyBroker";
export function Send_Reply({ isReplyed, replyMessageText, setIsReplyed, setReplyMessage }:
    { isReplyed: boolean, replyMessageText: string, setIsReplyed: Function, setReplyMessage: Function }
) {

    return <>
        {isReplyed ? <div className="reply-to">
            <ReplyIcon />
            <p>
                {replyMessageText}
            </p>
            <div className="close-reply-ico" >
                <s onClick={e => {
                    setIsReplyed(false);
                    setReplyMessage({ id: 0, txt: "" })
                }}>
                    <CloseIcon />
                </s>
            </div>
        </div> : <div></div>}
    </>
}

export function Send_Voice({ myId, itsId, chatId, replyId }:
    {
        myId: number, itsId: number,
        chatId: number | null,
        replyId: number | null
    }) {
    const addAudioElement = async (blob: Blob) => {
        const voiceForm = new FormData();
        voiceForm.set("voice", blob);

        fetch("/api/storevoice", {
            method: "post",
            body: voiceForm
        }).then(r => {
            r.text().then(async (txt) => {
                const filename = JSON.parse(txt).filename;
                const newMessage = await SendVoiceAction(filename, myId, itsId, chatId, replyId);
                if (newMessage) {
                    (MyBroker.get("sendmessagelive"))(newMessage);
                }
            })
        })

    };

    return <AudioRecorder
        onRecordingComplete={addAudioElement}
        audioTrackConstraints={{
            noiseSuppression: true,
            echoCancellation: true,
        }}
        downloadOnSavePress={false}
        showVisualizer={true}
        downloadFileExtension="webm"
    />
    // const [isRunning, setIsRunning] = useState(false);
    // const recorder = useAudioRecorder({noiseSuppression: true,
    //     echoCancellation: true},(e)=>{
    //         alert("we need your microphone")
    //     })
    // return <div> <ListItemIcon style={{ width: "100%", cursor: "pointer", textAlign: "center" }} onClick={async(e) => {
    //     setIsRunning(s => !s);
    //     if(isRunning){
    //         recorder.stopRecording();


    //     }
    //     else{
    //         recorder.startRecording();
    //     }

    // }}>
    //     <MicIcon sx={{ color: isRunning ? "blue" : "gray", fontSize: 40 }} />
    // </ListItemIcon>
    // <button onClick={async(e)=>{
    //     if(recorder.recordingBlob){
    //         await addAudioElement(recorder.recordingBlob);
    //     }
    //     else{
    //         alert(recorder.recordingTime);
    //     }
    // }}>Ok</button>
    // </div>

}