import * as m from 'mithril';
import MessageModel from '../models/Message';
import { Message } from '../models/Message';

export class MessageList implements m.Component {

    oninit() {
        MessageModel.fetch();
    }

    view() {
        return(
            <div class='container-fluid'>
                <div className='row'>
                    <div className='col-md-12-center'>
                        { MessageModel.messageList}
                    </div>
                </div>
            </div>
        );
    }
}
