/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement('table');
    this.elem.insertAdjacentHTML('afterbegin', `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
      
    `);

    let innerTable = this.rows.map(row => {
      let cellsOfTheRow = Object.values(row)
                       .map(value => `<td>${value}</td>`)
                       .join('');
      return `<tr>
              ${cellsOfTheRow}
              <td><button>X</button></td>
             </tr>
            `;
    });

    this.elem.innerHTML += `<tbody>
                              ${innerTable.join('')}
                            </tbody>`;
    this.elem.addEventListener('click', this.onClick);
  }

  onClick(event) {
    let target = event.target; //let, bo referencja do target'a później się zmienia
    
    if (target.tagName !== 'BUTTON') {
      return;
    }
   
    /* while (target = target.parentElement) {
      if (target.tagName === 'TR') {
        target.hidden = 'true';
        break;
      }
    } */
    let tr = target.closest('tr');
    tr.remove();
    
  }
  
}
