import type { NextPage } from 'next'
import {Ingress, Sidetittel, Systemtittel} from "nav-frontend-typografi";
import {LenkepanelBase} from "nav-frontend-lenkepanel";

const Home: NextPage = () => {
  return (
      <div className="hovedside">
        <Sidetittel>Permittering og omstilling </Sidetittel>
        <div className={'hovedside__lenkepanel-container'}>
          <LenkepanelBase className={'hovedside__lenkepanel'}  href={'https://arbeidsgiver.nav.no/arbeidsgiver-permittering/'}>
            <Systemtittel className={'hovedside__lenkepanel-tittel'}>Veiviseren for permittering</Systemtittel>
            <Ingress className={'hovedside__lenkepanel-ingress'}>
              Informasjon til arbeidsgivere om permittering av ansatte.
            </Ingress>
          </LenkepanelBase>
          <LenkepanelBase className={'hovedside__lenkepanel'}  href={'https://www.nav.no/no/bedrift/oppfolging/permittering-og-omstilling/omstilling-og-nedbemanning'}>
            <Systemtittel className={'hovedside__lenkepanel-tittel'}> Omstilling og nedbemanning</Systemtittel>
            <Ingress className={'hovedside__lenkepanel-ingress'}>
              NAV samarbeider med virksomheter i omstilling der mange ansatte mister eller står i fare for å miste jobben
            </Ingress>
          </LenkepanelBase>
          <LenkepanelBase className={'hovedside__lenkepanel'}  href={'https://www.nav.no/no/bedrift/oppfolging/permittering-og-omstilling/permittering-og-oppsigelse'}>
            <Systemtittel className={'hovedside__lenkepanel-tittel'}>Oppsigelse</Systemtittel>
            <Ingress className={'hovedside__lenkepanel-ingress'}>
              Ved oppsigelse er det vanlig at NAV samhandler med arbedisgivere og gir bistand til berørte arbeidstakere.
            </Ingress>
          </LenkepanelBase>
        </div>
      </div>
  )
}

export default Home
