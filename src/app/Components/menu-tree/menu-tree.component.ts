import { Component , OnInit, ViewChild } from '@angular/core';
import { MenuNode } from 'src/app/Model/menu-node.model';
import { MenuService } from 'src/app/Service/menu.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-menu-tree',
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.css']
})
export class MenuTreeComponent implements OnInit  {
  @ViewChild(MatMenuTrigger) treeMenu!: MatMenuTrigger;
  treeControl = new NestedTreeControl<MenuNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MenuNode>();
  constructor(private menuService: MenuService) { }
  ngOnInit(): void {
    this.menuService.getMenuData().subscribe(
      response => {
        console.log('API Response:', response);
        if (response.status && Array.isArray(response.data)) {
          this.dataSource.data = this.menuService.getTreeStructure(response.data);
          console.log('Tree Data:', this.dataSource.data);
        } else {
          console.error('Unexpected API response format');
        }
      },
      error => {
        console.error('Error fetching menu data:', error);
      }
    );
  }

  hasChild = (_: number, node: MenuNode) => !!node.children && node.children.length > 0;
    onRightClick(event: MouseEvent) {
    event.preventDefault();
    if (this.treeMenu) {
      this.treeMenu.openMenu();
    }
  }
}