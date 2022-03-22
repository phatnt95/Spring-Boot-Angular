import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal-account',
  templateUrl: './modal-account.component.html',
  styleUrls: ['./modal-account.component.scss']
})
export class ModalAccountComponent implements OnInit {

  title:string='CREATE ACCOUNT';
  dataBinding:any;

  constructor(public modalRef: MdbModalRef<ModalAccountComponent>) { }

  ngOnInit(): void {
  }

  save(){

  }

}
