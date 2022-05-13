import Task from '../index.js';

describe('add and remove', () => {
  window.localStorage = Storage.prototype;
  test('Add task', () => {
    const todoList = new Task();
    todoList.addTask('Test');
    expect(todoList.list).toHaveLength(1);

    const storage = JSON.parse(localStorage.getItem('task'));
    expect(storage).not.toBe(null);
    expect(localStorage).toHaveLength(1);
  });

  test('remove', () => {});
});
