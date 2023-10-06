export function isElementScrolled(element) {
    let result = {
        scrollTop: null,
        scrollLeft: null,
        isScrolled: null,
    };

    if (element) {
        result.scrollTop = element.scrollTop || 0;
        result.scrollLeft = element.scrollLeft || 0;
        result.isScrolled = element.scrollTop > 0 || element.scrollLeft > 0;
    }

    return result;
}
