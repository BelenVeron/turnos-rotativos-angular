import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ITEMS } from './nav-bar-data';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  /* Items del navegador */
  items = ITEMS;
  title: string = 'Manejo de empleados';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
    ) {
    this.setTitle();
  }

  setTitle(): void {
    this.items.forEach(item =>{
      if (this.router.url === item.url) {
        this.title = item.title;
      }
    })
  }

}
