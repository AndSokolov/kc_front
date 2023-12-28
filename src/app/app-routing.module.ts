import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  getManifest,
  loadRemoteModule
} from '@angular-architects/module-federation';

import { MfeManifest } from './types/config';

const manifest = getManifest<MfeManifest>();
const manifestEntries = Object.keys(manifest);

const routes = manifestEntries.map(entry => ({
  path: entry,
  loadChildren: () =>
    loadRemoteModule({
      type: 'module',
      remoteEntry: manifest[entry].remoteEntry,
      exposedModule: manifest[entry].remoteName
    }).then(m => m[manifest[entry].moduleName])
}));

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
