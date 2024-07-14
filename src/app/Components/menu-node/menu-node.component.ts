import { Component, Input  } from '@angular/core';
import { MenuNode } from 'src/app/Model/menu-node.model';

@Component({
  selector: 'app-menu-node',
  templateUrl: './menu-node.component.html',
  styleUrls: ['./menu-node.component.css']
})
export class MenuNodeComponent {
  @Input() node!: MenuNode
}
