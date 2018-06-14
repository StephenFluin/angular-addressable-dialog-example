import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {
  currentDialog: MatDialogRef<DetailsComponent> = null;
  destroy = new Subject<any>();

  constructor(route: ActivatedRoute, matDialog: MatDialog, router: Router) {
    route.params.pipe(
        takeUntil(this.destroy),
      )
      .subscribe(params => {
        if(this.currentDialog) {
          this.currentDialog.close();
        }
        this.currentDialog = matDialog.open(DetailsComponent, {data:{id: params.id}});

        this.currentDialog.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          router.navigateByUrl('/');

        });
      })
   }

  ngOnInit() {
    console.log('initing host component');
  }
  ngOnChanges() {
    console.log('changes received');
  }
  ngOnDestroy() {
    this.destroy.next();
    if(this.currentDialog) {
      this.currentDialog.close();
    }
  }

}
