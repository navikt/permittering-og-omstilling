import Sidetittel from "nav-frontend-typografi/lib/sidetittel";
import './Hovedside.less';
import {LenkepanelBase} from "nav-frontend-lenkepanel";
import Systemtittel from "nav-frontend-typografi/lib/systemtittel";
import Ingress from "nav-frontend-typografi/lib/ingress";


export const Hovedside = () =>  {
    return (
        <div className="hovedside">
            <Sidetittel>Permittering og omstilling </Sidetittel>
            <div className={'hovedside__lenkepanel-container'}>
                <LenkepanelBase className={'hovedside__lenkepanel'}  href={'/permittering'}>
                    <Systemtittel className={'hovedside__lenkepanel-tittel'}>Veiviseren for permittering</Systemtittel>
                    <Ingress className={'hovedside__lenkepanel-ingress'}>
                        Informasjon til arbeidsgivere om permittering av ansatte.
                        </Ingress>
                </LenkepanelBase>
                <LenkepanelBase className={'hovedside__lenkepanel'}  href={'/omstilling'}>
                    <Systemtittel className={'hovedside__lenkepanel-tittel'}> Omstilling og nedbemanning</Systemtittel>
                    <Ingress className={'hovedside__lenkepanel-ingress'}>
                        NAV samarbeider med virksomheter i omstilling der mange ansatte mister eller står i fare for å miste jobben
                    </Ingress>
                </LenkepanelBase>
                <LenkepanelBase className={'hovedside__lenkepanel'}  href={'/oppsigelse'}>
                    <Systemtittel className={'hovedside__lenkepanel-tittel'}>Oppsigelse</Systemtittel>
                    <Ingress className={'hovedside__lenkepanel-ingress'}>
                        Ved oppsigelse er det vanlig at NAV samhandler med arbedisgivere og gir bistand til berørte arbeidstakere.
                    </Ingress>
                </LenkepanelBase>
            </div>
        </div>
    );
}