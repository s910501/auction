import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WebSocketService {

  ws: WebSocket;

  constructor() { }

  createObservableSocket(url: string, id: number): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable<string>(
      observer => {
        this.ws.onmessage = (event) => observer.next(event.data);
        this.ws.onerror = (event) => observer.error(event);
        this.ws.onclose = (event) => observer.complete();
        // first connection
        this.ws.onopen = (event) => this.sendMessage({productId: id});
        // 返回值就是一个回调函数，流被取消订阅的时候调用
        return () => this.ws.close();
      }
    ).map(message => {
      return JSON.parse(message);
    });
  }

  sendMessage(message: any) {
    this.ws.send(JSON.stringify(message));
  }

}
