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
            method: 'GET',
            url: 'http://localhost:3000/message',
            withCredentials: true,
        }).then((result: any) => {
            MessageModel.messageList = result;
        });
    },
};

type MessageModel = typeof MessageModel;
export default MessageModel;