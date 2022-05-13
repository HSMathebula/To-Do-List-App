import { tasksArray } from '../index.js';

document.body.innerHTML = `
<div class="one-task" id=${0}>
    <div class="data">
      <input id=${0} class="checkBoxClass" type="checkbox" ${
  tasksArray[0].status ? 'checked' : ''
}>
      <p id=${0} class="${tasksArray[0].status ? 'checked' : ''} description">${
  tasksArray[0].task
}</p>
    </div>
    <span class="span">&cross;</span>
  </div>
  `;
