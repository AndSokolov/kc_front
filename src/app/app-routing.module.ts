import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'files',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'kc_files_front',
        exposedModule: 'kc_files_front'
      })
        .then(m => m.FilesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
