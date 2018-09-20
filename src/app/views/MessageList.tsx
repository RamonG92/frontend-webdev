import * as m from 'mithril';
import MessageModel from '../models/Message';
import { Message } from '../models/Message';
import { Table } from './Table';

export class MessageList implements m.Component {

    oninit() {
        MessageModel.fetch();
    }

    view() {
        return (
            <div class='table-responsive'>
                <table class='table table-striped-hover'>
                    <thead className='thead-dark'>
                        <tr>
                            <th scope='col'>PostId</th>
                            <th scope='col'>Author</th>
                            <th scope='col'>Title</th>
                            <th scope='col'>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MessageModel.messageList.map((message) => {
                            return (
                                <tr>
                                    <td>{message.id}</td>
                                    <td>{message.author}</td>
                                    <td>{message.title}</td>
                                    <td>{message.text}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
