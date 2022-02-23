import { doc } from 'prettier';

/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const myButton = document.createElement('button');
    myButton.textContent = 'Удали меня';
    document.body.appendChild(myButton);
    myButton.onclick = function () {
        document.getElementsByTagName('button')[0].remove();
    };
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const myUl = document.createElement('ul');
    for (let i = 0; i < arr.length; i++) {
        const myLi = document.createElement('li');
        myLi.textContent = arr[i];
        myLi.onmouseover = function (event) {
            myLi.title = myLi.textContent;
        };
        myUl.appendChild(myLi);
    }
    document.body.appendChild(myUl);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const myHref = document.createElement('a');
    myHref.href = 'https://tensor.ru/';
    myHref.textContent = 'tensor';
    myHref.addEventListener('click', function (event) {
        if (!this.textContent.includes('https://tensor.ru/')) {
            this.textContent = this.textContent + ' https://tensor.ru/';
            event.preventDefault();
        }
    });
    document.body.appendChild(myHref);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const myUl = document.createElement('ul');
    const myLi = document.createElement('li');
    myLi.textContent = 'Пункт';
    myLi.click = function (event) {
        this.textContent = this.textContent + '!';
    };
    myUl.appendChild(myLi);
    const myButton = document.createElement('button');
    myButton.textContent = 'Добавить пункт';
    myButton.click = function (event) {
        const myNewLi = document.createElement('li');
        myNewLi.textContent = 'Пункт';
        myNewLi.click = function () {
            this.textContent = this.textContent + '!';
        };
        myUl.appendChild(myNewLi);
    };
    document.body.appendChild(myUl);
    document.body.append(myButton);
}
