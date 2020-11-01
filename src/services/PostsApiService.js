export class PostsApiService {
  _url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
  async getPosts(){
    return (await fetch(this._url)).json();
  }
}
