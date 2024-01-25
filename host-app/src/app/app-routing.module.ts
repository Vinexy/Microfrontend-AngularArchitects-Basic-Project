import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo:"/1", pathMatch:"full"},
  {
    path: "1",
    loadChildren:()=>{
      return loadRemoteModule({
        remoteEntry:"http://localhost:4300/remoteEntry.js",
        remoteName: "remoteApp",
        exposedModule: "./CounterModule"
      }).then(m=>m.CounterModule).catch(err => console.log(err)
      );
    }
  },
  {
    path: "2",
    loadChildren:()=>{
      return loadRemoteModule({
        remoteEntry:"http://localhost:4400/remoteEntry.js",
        remoteName: "secondApp",
        exposedModule: "./SecondModule"
      }).then(m=>m.SecondModule).catch(err => console.log(err)
      );
    }
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
