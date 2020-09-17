import { observable, computed, action } from 'mobx';

export class AppViewmodel {
  @observable name = '';

  constructor() {
    fetch('/test')
      .then((res) => res.json())
      .then(({ name }) => this.updateName(name));
  }

  @computed get welcomeMessage() {
    return this.name ? `Welcome, ${this.name}` : 'Welcome!';
  }

  @action
  updateName = (name) => {
    this.name = name;
  };
}
