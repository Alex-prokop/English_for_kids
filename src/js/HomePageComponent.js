const cardElement = (src, alt, text) =>
  `<div class="main-card"><img src="${src}" alt="${alt}">${text}</div>`;

const HomePageComponent = {
  render: () => {
    const cards = [
      ['./assets/img/dance.jpg', 'Action (set A)', 'Action (set A)'],
      ['./assets/img/swim.jpg', 'Action (set B)', 'Action (set B)'],
      ['./assets/img/one.jpg', 'Numbers', 'Numbers'],
      ['./assets/img/red.jpg', 'Colors', 'Colors'],
      ['./assets/img/rabbit.jpg', 'Animal (set A)', 'Animal (set A)'],
      ['./assets/img/bird.jpg', 'Animal (set B)', 'Animal (set B)'],
      ['./assets/img/dress.jpg', 'Clothes', 'Clothes'],
      ['./assets/img/happy.jpg', 'Emotions', 'Emotions'],
    ];

    const cardElements = cards.map((card) => cardElement(...card)).join('');

    return `<div class="cards-block">${cardElements}</div>`;
  },
};

export default HomePageComponent;
