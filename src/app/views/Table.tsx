import * as m from 'mithril';

export class Table implements m.Component {
    private data: any;

    constructor(vnode) {
        this.data = vnode.attrs.data;
    }

    view(vnode) {
        return (
            <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Beschrijving</th>
                            <th className="text-right" scope="col">Uren</th>
                            <th scope="col">Datum geplaatst</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.data.map((row) => {
                            return (
                                <tr>
                                    <td>{row.title}</td>
                                    <td className="text-right">{row.hours}</td>
                                    <td>{row.date}</td>
                                    <td className="text-right"><button type="button" class="btn btn-primary" 
                                        href={`/activiteiten/${row.id}`} oncreate={m.route.link}>Details</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}