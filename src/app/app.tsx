import * as dotenv from 'dotenv';
dotenv.config(); // load .env variables

import * as m from 'mithril';
import '../scss/main.scss';
import 'bootstrap';
import { Layout } from './views/Layout';
import { MessageList } from './views/MessageList';

// m.route.prefix("");

m.route(document.body, '/', {
	'/': {
		view: () => (
			<Layout>
				<MessageList />
			</Layout>
		),
	},
	'/mijn-activiteiten': {
		view: (vnode) => (
			<Layout>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<h3>Under contruction</h3>
						</div>
					</div>
				</div>
			</Layout>
		),
	},
});