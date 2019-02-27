import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { RegisterComponent }   from './register/register.component';
import { EditComponent } from './edit/edit.component';
import { MessageDetailComponent } from './detail/message-detail.component';



const routes: Routes = [

	 { 
		 path: 'inicial',
		 component: HomeComponent,
		 data: { title: 'Inicial'}
	 },
	  
	  {
		 path: 'cadastrar',
		 component: RegisterComponent,
		 data: { title: 'Cadastrar Mensagem'}
	  },
	  {
		path: 'editar/:id',
		component: EditComponent,
		data: { title: 'Editar Mensagem' }
	  },
	  {
		path: 'mensagem/:id',
		component: MessageDetailComponent,
		data: { title: 'Detalhes da Mensagem' }
	  },
	  { path: '',
			redirectTo: '/inicial',
			pathMatch: 'full'
	  },
	  { path: '**', component: HomeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
