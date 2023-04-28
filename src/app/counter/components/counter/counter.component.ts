import { Component } from '@angular/core';
@Component({
  selector: 'app-counter',
  template: `
        <fieldset>
          <legend>
            <h3>App-Counter: {{counter}}</h3>
          </legend>
          <button (click)="setCounter(1)">Añadir 1</button>
          <button (click)="setCounter(-1)">Restar 1</button>
          <button (click)="resetCounter()">Reset contador</button>
        </fieldset>`
})
export class counterComponent {

  public counter: number = 10;


  public setCounter(num: number): void {
    this.counter += num;
  }

  public resetCounter() {
    this.counter = 10;
  }

}