import { Component } from '@angular/core';
import { DepartementService } from '../service/departement.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-dep-component',
  templateUrl: './list-dep-component.component.html',
  styleUrls: ['./list-dep-component.component.css']
})
export class ListDepComponentComponent {
dep:any;
search=0;
id:any
Nb: number = 0;
  constructor(private s: DepartementService,
    private ac: ActivatedRoute,
    private router:Router
  ) { }
  
   ngOnInit()
{
  this.s.FetchDep().subscribe(

(result)=>{this.dep=result}
  )
}


calcul() {
 for (let i = 0; i < this.dep.length; i++) {
    if (typeof this.dep[i].nb_employer === 'number' && !isNaN(this.dep[i].nb_employer)) {
      this.Nb += this.dep[i].nb_employer;



    }}


  }

  Delete(id: any) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce département ?')) {
      this.s.Delete(id).subscribe(
        () => {
          
          this.s.FetchDep().subscribe(
            (result) => {
              this.dep = result;
            }
          );
          alert('Le département a été supprimé avec succès.');
        }
      );
    }
  }
}
          


















