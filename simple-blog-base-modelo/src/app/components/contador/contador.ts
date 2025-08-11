import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {
  @ViewChild('mybutton') button!: ElementRef;

  contador = 0;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.button.nativeElement.addEventListener('click', () => {
        this.contador++;
        this.ngZone.run(() => {
          console.log(this.contador);
        });
      });
    });
  }

  // incrementar() {
  //   this.contador++;
  // }
}
