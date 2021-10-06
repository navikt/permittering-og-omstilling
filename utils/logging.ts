/*
Vi må lazy-loade loggingConfig, da nextjs rendrer html på server, og kresjer dermed amplitude-sdk
Prøver derfor å ikke initiere amplitude-sdk instansen før en logevent blir kalt.
*/


export const loggSidevinsing = (url:string) => {

    try {
        import("./amplitudeConfig").then((logging) => {

            logging.loggInstance.logEvent("sidevisning", {url: url});
        });
        console.log("prøver å logge ")
    } catch (e) {
        console.error("Kunne ikke logge til amplitdue:", e);
        console.log("feiler")
    }
};



