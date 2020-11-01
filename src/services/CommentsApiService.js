export class CommentsApiService {
  _url = 'https://jsonplaceholder.typicode.com/comments?_limit=10';
  async getComments(){
    return (await fetch(this._url)).json();
  }
}
