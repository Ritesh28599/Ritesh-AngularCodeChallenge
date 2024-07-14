import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuNode } from '../Model/menu-node.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'http://49.249.110.2:8050/api/MenuMasters/GetMenuMasterList/173';
  constructor(private http: HttpClient) { }
  getMenuData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getTreeStructure(data: any[]): MenuNode[] {
    // console.log('Raw Data:', data);
    const map = new Map<number, MenuNode>();
    const roots: MenuNode[] = [];

    data.forEach(item => {
      const node: MenuNode = {
        id: item.id,
        name: item.name,
        children: []
      };
      map.set(item.id, node);

      if (!item.refMenuId) {
        roots.push(node);
      } else {
        const parent = map.get(item.refMenuId);
        if (parent) {
          parent.children?.push(node);
        }
      }
    });
    // console.log('Processed Tree Structure:', roots);
    return roots;
  }
}