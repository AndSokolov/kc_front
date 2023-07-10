import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { environment } from "../environments/environment";


const routes: Routes = [
  {
    path: 'files',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: `${environment.mfe.kc_files_front}/remoteEntry.js`,
      exposedModule: 'kc_files_front'
    }).then(m => m.FilesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
