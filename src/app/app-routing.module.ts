import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NameEditorComponent} from './name-editor/name-editor.component';
import {ProfileEditorComponent} from './profile-editor/profile-editor.component';


const routes: Routes = [
  {path: 'name-editor', component: NameEditorComponent},
  {path: 'profile-editor', component: ProfileEditorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
