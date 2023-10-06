export function getPageData() {
    const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
        window.innerWidth || document.documentElement.clientWidth;
    const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
    );
    const documentWidth = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
    );
    const currentScrollFromTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    const currentScrollFromLeft =
        window.pageXOffset ||
        document.documentElement.scrollLeft ||
        document.body.scrollLeft;

    let result = {
        windowHeight: windowHeight,
        windowWidth: windowWidth,
        documentHeight: documentHeight,
        documentWidth: documentWidth,
        currentScrollFromTop: currentScrollFromTop,
        currentScrollFromLeft: currentScrollFromLeft,
    };

    return result;
}
