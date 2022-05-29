const modal = document.getElementsByClassName('modal');
const openModal = document.getElementsByClassName('project');
const closeModal = document.getElementsByClassName('closeModal');

// Really proud of using "for ... of" and destructuring combo in action!
for (let [index, value] of [...openModal].entries()) {
  openModal[index].addEventListener('click', () => modal[index].showModal());
}

for (let [index, value] of [...closeModal].entries()) {
  closeModal[index].addEventListener('click', () => modal[index].close());
}
