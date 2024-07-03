function init() {

  const cards = document.querySelectorAll('.card')

  cards.forEach(card => {
    card.addEventListener('click', () => {
      if (card.classList.contains('rotated')) {
        card.classList.remove('rotated')
      } else {
        cards.forEach(c => c.classList.remove('rotated'))

        card.classList.add('rotated')

      }

    })
  })





}

window.addEventListener('DOMContentLoaded', init)