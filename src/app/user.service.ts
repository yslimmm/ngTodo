import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {TodoVO} from './domain/todo.vo';
import {MemberVO} from './domain/member.vo';

@Injectable()
export class UserService {

  private SERVER: string;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.SERVER = `${environment.HOST}`;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  getTodoList() {
    return this.http.get(this.SERVER + '/api/todo');
  }

  addTodo(params: TodoVO) {
    return this.http.post(this.SERVER + '/api/todo', params, {headers: this.headers});
  }

  modifyTodo(params: TodoVO) {
    return this.http.put(this.SERVER + '/api/todo', params, {headers: this.headers});
  }

  removeTodo(param: number) {
    // es6 문법인 `사용하여 todo_id를 넘길 수 있도록 함.
    return this.http.delete(this.SERVER + `/api/todo?todo_id=${param}`);
  }

  // 로그인 인증
  getSocial(site: string) {
    return this.http.get(this.SERVER + `/api/social?site=${site}`);
  }

  signUp(member: MemberVO) {
    return this.http.post(this.SERVER + '/api/signUp', member, {headers: this.headers});
  }
}
