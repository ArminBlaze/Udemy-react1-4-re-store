export default class BookstoreService {
		
  getBooks() {
    return [
      {id: 1, title: 'Гарри Поттер', author: 'Ролинг'},
      {id: 2, title: 'Властелин Колец', author: 'Толкиен'},
      {id: 3, title: 'Алеткар', author: 'Сандерс'}
    ];
  }

}