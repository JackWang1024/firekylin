import Base from './base.js';

export default class extends think.controller.base {
  indexAction() {
    console.log(123)
    return this.display();
  }
}