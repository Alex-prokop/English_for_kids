export function rotateCardBack(e) {
  if (e.target.classList.contains('translate')) {
    e.target.classList.remove('translate');
  }
}

export function rotateCard(e) {
  if (e.target.classList.contains('rotate')) {
    const targetCard = e.target.closest('.card');
    targetCard.classList.add('translate');
  }
}
