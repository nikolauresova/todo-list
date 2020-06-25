'use strict';

console.log('funguju!');

//Smažte obsah elementu todo__tasks uvnitř souboru index.html.
//V JavaScriptu vytvořte pole řetězců tasks, které bude reprezentovat seznam úkolů.
//Vytvořte funkci updateTasks, která zobrazí na stránce seznam úkolů dle toho, co je obsaženo v poli tasks.
//Umožněte uživateli přidat nový úkol pomocí textového políčka. Vždy, když uživatel klikne tlačítko přidat, vložte do pole tasks obsah textového políčka a zavolejte funkci updateTasks, která aktualizuje vaši stránku.

const tasks = ['Procvičovat JS', 'Uvařit', 'Odpočívat'];

const updateTasks = () => {
  const todoElm = document.querySelector('.todo__tasks')
  todoElm.innerHTML = ``;
  for (let i = 0; i < tasks.length; i++) {
    todoElm.innerHTML += `<div class = "task">${tasks[i]}</div>`
  }
}

const addTasks = () => {
  const inputElm = document.getElementById('new-task')
  const value = inputElm.value.trim();
  if (inputElm.value != "") {
    tasks.push(inputElm.value)
    updateTasks(tasks)
  }  
};


const addButtonElm = document.querySelector('.btn-add')
addButtonElm.addEventListener('click', addTasks)

updateTasks(tasks)