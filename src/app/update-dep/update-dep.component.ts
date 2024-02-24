import { Component } from '@angular/core';
import { DepartementService } from '../service/departement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-dep',
  templateUrl: './update-dep.component.html',
  styleUrls: ['./update-dep.component.css']
})
export class UpdateDepComponent {
  dep: any;
  constructor(private s: DepartementService,
    private ac: ActivatedRoute

  ) { }


  ngOnInit() {

    this.s.FindDepById(this.ac.snapshot.params['id']).subscribe(
      (d) => {
        this.dep = d;
        this.dep.max_salaire = 500;
        this.s.Update(this.dep, this.ac.snapshot.params['id']).subscribe(
          () => {
            alert('updated')

          }
        )
      }
    )



  }
}
