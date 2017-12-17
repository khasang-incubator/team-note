import {Component, OnInit} from "@angular/core";
import {SidebarService} from "./sidebar.service";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private sidebarService: SidebarService,
              public authService: AuthService) {
    this.menuItems = this.sidebarService.menuItems;
  }

  menuItems: { name: string, localName: string, url: string }[] = [];

  onSelectItem(feature) {
    this.sidebarService.itemSelected = feature;
    this.sidebarService.selectItemEmitter.emit(feature.name);
  }

  ngOnInit() {
  }

}