

export function __(n, defaultText = '[text]') {
    return window.o !== undefined ? window.o.localize[n] : defaultText;
}