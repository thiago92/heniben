import { Component, HostListener, inject, TemplateRef  } from '@angular/core';

import { ModalDismissReasons, NgbModal, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { faHouse, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  title = 'site-isa';

  private modalService = inject(NgbModal);
	closeResult = '';

  faHouse = faHouse;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faX = faX
  email: string = 'contato@heniben.com.br';

  constructor() { }

  ngOnInit(): void {}

  open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}

  goToLink(url: string){
    window.open(url, "_blank");
  }
}
