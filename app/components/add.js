import Component from '@glimmer/component';
import { set } from '@ember/object';

export default class AddComponent extends Component {
  constructor() {
    super(...arguments);

    const person = this.args.person;

    // person.firstname = '23';

    set(person, 'firstname', '23');

    console.log(person);
  }
}
