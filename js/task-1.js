const categoryNumber = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryNumber.length}`);

categoryNumber.forEach((category) => {
  // const header = category.querySelector('h2').textContent;
  // console.log(`Header: ${header}`);
  console.log(`Header: ${category.querySelector('h2').textContent}`);
  // const items = category.querySelectorAll('li');
  // console.log(`Elements: ${items.length}`);
  console.log(`Elements: ${category.querySelectorAll('li').length}`);
});
