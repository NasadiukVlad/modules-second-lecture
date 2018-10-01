import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  private firstQueryParam: string;
  private secondQueryParam: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.subscribeForActiveRouteParams();
    alert(`First param: ${this.firstQueryParam}`);
    alert(`Second param: ${this.secondQueryParam}`);
  }

  public onNavigate() {
    this.router.navigate(['']);
  }

  public subscribeForActiveRouteParams() {
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      this.firstQueryParam = queryParams['customQuery'];
      this.secondQueryParam = queryParams['secondQueryParam'];
    });
  }
}


