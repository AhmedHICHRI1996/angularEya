import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { departement } from '../Model/departement';
import { DepartementService } from '../service/departement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-dep-component',
  templateUrl: './add-dep-component.component.html',
  styleUrls: ['./add-dep-component.component.css']
})
export class AddDepComponentComponent {
 constructor( private s:DepartementService ,
  private router:Router
  
  ){

 }

fg=new FormGroup({
  matricule:new FormControl('',[Validators.minLength(3), Validators.pattern('[a-zA-Z]+'),Validators.maxLength(7)]),
  domaine:new FormControl(),
  nb_employer:new FormControl(),
  max_salaire:new FormControl()

})
save(){
  this.s.AddDep(this.fg.value).subscribe(
    ()=>{
      //alert('added')
      this.router.navigate(['list'])
    }
  )

}
}
