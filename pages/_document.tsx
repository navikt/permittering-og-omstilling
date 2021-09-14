import React from 'react';
import Document, { Head, Html, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document';
import { fetchDecoratorReact, Components } from '@navikt/nav-dekoratoren-moduler/ssr';
import 'node-fetch';

// The 'head'-field of the document initialProps contains data from <head> (meta-tags etc)
const getDocumentParameter = (initialProps: DocumentInitialProps, name: string) => {
    return initialProps.head?.find((element) => element?.props?.name === name)?.props?.content;
};

interface Props {
    Decorator: Components;
    language: string;
}

class MyDocument extends Document<Props> {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps & Props> {
        const initialProps = await Document.getInitialProps(ctx);

        const Decorator = await fetchDecoratorReact({
            env: 'prod',
            chatbot: true,
            context: 'arbeidsgiver',
            breadcrumbs: [{ title: 'Permittering og omstilling', url: 'https://www.nav.no/no/bedrift/oppfolging/permittering-og-omstilling' }],
        });

        const language = getDocumentParameter(initialProps, 'lang');

        return { ...initialProps, Decorator, language };
    }

    render(): JSX.Element {
        const { Decorator, language } = this.props;

        return (
            <Html lang={language || 'no'}>
                <Head>
                    <Decorator.Styles />
                </Head>
                <body>
                    <Decorator.Header />
                    <Main />
                    <Decorator.Footer />
                    <Decorator.Scripts />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
