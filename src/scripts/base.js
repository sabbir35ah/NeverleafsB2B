const add_scroll_animation = () => {
    const scrollers = document.querySelectorAll(".announcement-scroller");
    scrollers.forEach((scroller) => {
        const scrollerInner = scroller.querySelector(".announcement-scroller-inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}

export { add_scroll_animation };