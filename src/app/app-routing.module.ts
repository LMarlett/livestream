import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Page component imports
import { LivestreamComponent } from './livestream/livestream.component'; 
 


const routes: Routes = [
  // url links - what is written between '' will be the path after the slash for that component
  // '' and 'home' both redirect to the home page
  { path: '', component: LivestreamComponent },
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
