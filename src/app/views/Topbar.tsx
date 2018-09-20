import * as m from 'mithril';

export class Topbar implements m.Component {
    view() {
        return (
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <a class="navbar-brand" href="/" oncreate={m.route.link}>
                    <img src="../../assets/hva_logo.svg" width="30" height="30" alt="" />
                </a>
                {/* <a class="navbar-brand" href="/" oncreate={m.route.link}>Bedrijfspunten-verdien-app</a> */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a href="/" className="nav-link" oncreate={m.route.link}>Overzicht berichten</a>
                        </li>
                        <li class="nav-item">
                            <a href="/mijn-activiteiten" className="nav-link" oncreate={m.route.link}>Maak nieuw bericht</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}