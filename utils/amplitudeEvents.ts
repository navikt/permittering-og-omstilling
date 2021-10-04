import amplitude from '../utils/amplitudeInstance';

export const loggSidevinsing = (url: string) => {
    amplitude.logEvent('sidevisning', {
        url: url,
    });
};

