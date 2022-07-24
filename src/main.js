// const draggables = document.querySelectorAll('.task');
// const container = document.querySelector('.tasks');
// console.log(container);
// draggables.forEach((draggable) => {
//     draggable.addEventListener('dragstart', () => {
//         draggable.classList.add('dragging');
//     });
//     draggable.addEventListener('dragend', () => {
//         draggable.classList.remove('dragging');
//     });
// });

// const getDragAfterElement = (y) => {
//     const draggableElements = [...document.querySelectorAll('.draggable:not(.dragging)')];

//     return draggableElements.reduce(
//         (closest, child) => {
//             const box = child.getBoundingClientRect();
//             const offset = y - box.top - box.height / 2;
//             if (offset < 0 && offset > closest.offset) {
//                 return { offset: offset, element: child };
//             } else {
//                 return closest;
//             }
//         },
//         { offset: Number.NEGATIVE_INFINITY },
//     ).element;
// };
// container.addEventListener('dragover', (e) => {
//     e.preventDefault();
//     const afterElement = getDragAfterElement(e.clientY);
//     const draggable = document.querySelector('.dragging');
//     if (afterElement == null) {
//         container.appendChild(draggable);
//     } else {
//         container.insertBefore(draggable, afterElement);
//     }
// });
