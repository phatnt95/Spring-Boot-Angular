import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalAccountComponent } from '../modal-account/modal-account.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  modalRef: MdbModalRef<ModalAccountComponent> | null = null;
  selectedItem: any;
  dataGridHeader: string[] = [
    'STT',
    'First Name',
    'Last Name',
    'Email'
  ];
  sampleData: Sample[] = [
    { firstName: 'abc', lastName: 'xyz', email: '@abc.com' },
    { firstName: 'abc', lastName: 'xyz', email: '@abc.com' },
    { firstName: 'abc', lastName: 'xyz', email: '@abc.com' },
  ]
  constructor(private modalService: MdbModalService) { }

  ngOnInit(): void {
  }

  onRowClick(e: Event) {
    console.log(e);
  }

  onSelect(selected: any) {
    console.log(selected);
  }

  onDoubleClick(selected: any) {
    this.selectedItem = selected;
    //open modal edit
    this.openModal();
  }

  openModal() {
    this.modalRef = this.modalService.open(ModalAccountComponent, {
      modalClass: 'modal-xl',
      data: {
        title: 'EDIT ACCOUNT',
        dataBinding: this.selectedItem
      },
    });
  }

}

export interface Sample {
  firstName: string,
  lastName: string,
  email: string,
}