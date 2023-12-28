import { getManifest } from '@angular-architects/module-federation';
import { Injectable } from '@angular/core';

import { MfeManifest } from '../types/config';
import { environment } from 'src/environments/environment';

@Injectable()
export class MfeService {
  getEntryLogoFromManifest(url: string, urlAfterRedirects: string) {
    const manifest = getManifest<MfeManifest>();
    const manifestEntries = Object.keys(manifest);

    const entry = manifestEntries.find(
      route =>
        url.startsWith(`/${route}`) || urlAfterRedirects.startsWith(`/${route}`)
    );

    if (!entry) return { entry, logoUrl: environment.default_logo_url };

    return {
      entry,
      logoUrl: manifest[entry]?.logoUrl ?? environment.default_logo_url
    };
  }
}
