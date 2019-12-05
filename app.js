let cards = Array.from(document.querySelectorAll('.card-container'));

cards.forEach(card => {
    card.addEventListener('click', () => {
        let flip = new Flip();
        flip.read(cards);
        flip.remove([card]);
        cards = cards.filter(_card => _card !== card);
        flip.play(cards);
    })
});
