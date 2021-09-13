import type { NextPage } from 'next'
import "@navikt/ds-css"
import { ContentContainer, Ingress, Loader, Title } from '@navikt/ds-react';
const Home: NextPage = () => {
  return (
      <div className="hovedside">
        <ContentContainer>
          <Title spacing={true} size={"s"}>
            Permittering 101
          </Title>
          <Ingress>
            Informasjon til arbeidsgivere om permittering av ansatte.
          </Ingress>
        </ContentContainer>
        <Loader></Loader>
        <div className={'hovedside__lenkepanel-container'}>

        </div>
      </div>
  )
}

export default Home
