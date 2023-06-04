const StatisticComponent = {
  render: (cards) => {
    const tableRows = cards.map((category, i) => {
      const [categoryName, ...categoryCards] = category;
      const categoryHeading = `<tr class="cat-heading"><td colspan="6">${categoryName}</td></tr>`;

      const wordRows = categoryCards.map((card) => {
        const { correct = 0, wrong = 0, asked = 0 } = card;
        const errors =
          +wrong + +correct === 0
            ? 0
            : Math.round((+wrong / (+wrong + +correct)) * 100);

        return `<tr class="cat-word">
            <td>${card.word}</td>
            <td>${card.translation}</td>
            <td>${asked}</td>
            <td>${correct}</td>
            <td>${wrong}</td>
            <td>${errors}</td>
          </tr>`;
      });

      return categoryHeading + wordRows.join('');
    });

    return `<table>${tableRows.join('')}</table>`;
  },
};

export default StatisticComponent;
