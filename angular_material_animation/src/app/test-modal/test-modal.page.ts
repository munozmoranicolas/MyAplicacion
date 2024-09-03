import { Component, OnInit,ViewChild } from '@angular/core';
import type { IonModal } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.page.html',
  styleUrls: ['./test-modal.page.scss'],
})
export class TestModalPage implements OnInit {
  @ViewChild('modal', { static: true }) modal: IonModal;

  constructor(private animationCtrl: AnimationController) {
    this.modal = {} as IonModal;
  }

  ngOnInit() {
    const enterAnimation = (baseEl: HTMLElement) => {
      const root = baseEl.shadowRoot || baseEl;
      let elemento_backdrop = root.querySelector('ion-backdrop') || document.createElement('ion-backdrop');
      let elemento_wrapper = root.querySelector('.modal-wrapper') || document.createElement('div');
      const backdropAnimation = this.animationCtrl
        .create()
        .addElement(elemento_backdrop)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animationCtrl
        .create()
        .addElement(elemento_wrapper)
        .keyframes([
          { offset: 0, opacity: '0', transform: 'scale(0)' },
          { offset: 1, opacity: '0.99', transform: 'scale(1)' },
        ]);

      return this.animationCtrl
        .create()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    };

    const leaveAnimation = (baseEl: HTMLElement) => {
      return enterAnimation(baseEl).direction('reverse');
    };

    this.modal.enterAnimation = enterAnimation;
    this.modal.leaveAnimation = leaveAnimation;
  }

  closeModal() {
    this.modal.dismiss();
  }
}
