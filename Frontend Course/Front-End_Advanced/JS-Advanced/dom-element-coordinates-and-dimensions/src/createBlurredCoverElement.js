export function createBlurredCoverElement(elementToCover) {
    const rect = elementToCover.getBoundingClientRect();

    const scrollX = window.scrollX || document.documentElement.scrollLeft;
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    const coverElement = document.createElement("div");
    coverElement.className = "cover";

    coverElement.style.position = "absolute";
    coverElement.style.top = rect.top + scrollY + "px";
    coverElement.style.left = rect.left + scrollX + "px";
    coverElement.style.width = rect.width + "px";
    coverElement.style.height = rect.height + "px";

    return coverElement;
}
