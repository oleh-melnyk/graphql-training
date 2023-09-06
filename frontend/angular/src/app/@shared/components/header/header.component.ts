import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { Statistic } from './models';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[];
  statistic$!: Observable<Statistic>;

  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    this.initMenuItems();
    this.queryStatistic();
  }

  initMenuItems() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home',
      },
      {
        label: 'Posts',
        icon: 'pi pi-fw pi-check-square',
        routerLink: '/posts',
      },
      {
        label: 'Posts paginated',
        icon: 'pi pi-fw pi-clone',
        routerLink: '/posts-paginated',
      },
      {
        label: 'Albums',
        icon: 'pi pi-fw pi-image',
        routerLink: '/albums',
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-compass',
        routerLink: '/about',
      },
    ];
  }

  queryStatistic() {
    this.statistic$ = this.headerService.queryPostAndCommentsCount();
  }
}
