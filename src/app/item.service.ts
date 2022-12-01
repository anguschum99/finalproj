import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Item } from './item';
import { ITEMS } from './mock-items';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class ItemService {

  constructor(private messageService: MessageService) { }

  getItems(): Observable<Item[]> {
    var items = of(ITEMS.sort((a,b) => (a.counter > b.counter ? -1 : 1)));
    this.messageService.add('ItemService: fetched items');
    return items;
  }

  getItem(id: number): Observable<Item> {
    const item = ITEMS.find(h => h.id === id)!;
    this.messageService.add(`ItemService: fetched item id=${id}`);
    ITEMS[ITEMS.findIndex(elem => elem['id'] == id)].counter += 1;

    return of(item);
  }
}
