import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { MfeService } from 'src/app/services/mfe.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    public mfeService: MfeService,
    private router: Router
  ) {}

  logoUrl = environment.default_logo_url;

  currentService: string | undefined;
  showUserInfo: boolean;

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        const { entry, logoUrl } = this.mfeService.getEntryLogoFromManifest(
          (event as NavigationEnd).url,
          (event as NavigationEnd).urlAfterRedirects
        );

        this.currentService = entry;
        this.logoUrl = logoUrl;
      });
  }
}
