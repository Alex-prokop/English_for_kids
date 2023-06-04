const CardsComponent = {
  render: (cards) => {
    let renderElement = `
      <div class="cards-block page">
        <div class="rating"></div>`;

    for (let i = 0; i < cards.length; i += 1) {
      const { word, image, translation } = cards[i];

      renderElement += `
        <div class="card-container">
          <div class="card" data-word="${word}">
            <div class="front" style="background-image: url(${image});">
              <div class="card-header">${word}</div>
            </div>
            <div class="back hidden" style="background-image: url(${image});">
              <div class="card-header">${translation}</div>
            </div>
            <div class="rotate"></div>
          </div>
        </div>`;
    }

    renderElement += `
      <div class="btn-wrapper">
        <button class="btn none">Start game</button>
      </div>
      <audio class="audio"></audio>
      <audio class="starSound"></audio>
      </div>`;

    return renderElement;
  },
};

export default CardsComponent;
