export function isElementVisible(element) {
    if (element && (element.offsetHeight || element.offsetWidth)) {
        return true;
    }
    return false;
}
