import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.data['products']);
  }

  goToProduct(): void {
    this.router.navigate(['product'], {
      relativeTo: this.activatedRoute,
      queryParams: { page: 2 },
      queryParamsHandling: 'preserve',
    });
    // this.router.navigateByUrl('home/product');
  }

  call() {
    // this.router.navigateByUrl('test', {state: {id: "22"}})
    this.router.navigate(['test'], { state: { id: '22' } });
  }
}
