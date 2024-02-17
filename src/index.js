document.addEventListener("DOMContentLoaded", function () {
  const list = ["glasses1", "glasses2", "hat1", "hat2", "earring"];
  const visibles = [true, false, false, true, true];
  const setVisible = (button, entities, visible) => {
    if (visible) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
    entities.forEach((entity) => {
      entity.setAttribute("visible", visible);
    });
  };
  list.forEach((item, index) => {
    const button = document.querySelector("#" + item);
    const entities = document.querySelectorAll("." + item + "-entity");
    setVisible(button, entities, visibles[index]);
    button.addEventListener("click", () => {
      visibles[index] = !visibles[index];
      setVisible(button, entities, visibles[index]);
    });
  });
});
