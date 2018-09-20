import * as m from 'mithril';

export interface Message {
    id: number;
    title: string;
    author: string;
    text: string;
}

const MessageModel = {
    messageList: [] as Message[],
    fetch() {
        return m.request({
            method: "GET",
            url: "http://localhost:3000/api",
            withCredentials: true,
        }).then((result: any) => {
            MessageModel.messageList = result.data
            console.log(result.data);
            
        });
    }
};

type MessageModel = typeof MessageModel;
export default MessageModel;