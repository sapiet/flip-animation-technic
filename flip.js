class Flip {
    constructor() {
        this.duration = 400;
        this.animateOptions = {
            duration: this.duration,
            easing: 'ease-in-out',
            fill: 'both'
        };
        this.positions = {};
    }

    read(elements) {
        elements.forEach(element => {
            const id = element.getAttribute('id');
            this.positions[id] = element.getBoundingClientRect();
        })
    }

    play(elements) {
        elements.forEach(element => {
            const id = element.getAttribute('id');
            const newPosition = element.getBoundingClientRect();
            const oldPosition = this.positions[id];

            if (undefined === oldPosition) {
                element.animate([{
                    transform: `translate(0px, -30px)`,
                    opacity: 0
                }, {
                    transform: 'none',
                    opacity: 1
                }], this.animateOptions);
            } else {
                const deltaX = oldPosition.x - newPosition.x;
                const deltaY = oldPosition.y - newPosition.y;
                const deltaW = oldPosition.width / newPosition.width;
                const deltaH = oldPosition.height / newPosition.height;

                element.animate([{
                    transform: `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`
                }, {
                    transform: 'none'
                }], this.animateOptions);
            }
        })
    }

    remove(elements) {
        elements.forEach(element => element.parentNode.appendChild(element));

        elements.forEach(element => {
            const id = element.getAttribute('id');
            const newPosition = element.getBoundingClientRect();
            const oldPosition = this.positions[id];
            const deltaX = oldPosition.x - newPosition.x;
            const deltaY = oldPosition.y - newPosition.y;

            element.animate([{
                transform: `translate(${deltaX}px, ${deltaY}px)`,
                opacity: 1
            }, {
                transform: `translate(${deltaX}px, ${deltaY - 30}px)`,
                opacity: 0
            }], this.animateOptions);

            window.setTimeout(() => element.parentNode.removeChild(element), this.duration)
        });
    }
}
