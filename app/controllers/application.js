import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  constructor() {
    super(...arguments);
    console.log('shubam form aontroller');
  }

  @tracked person = {
    firstname: 'Shubam ',
    lasname: 'Y',
    age: 25,
  };

  @tracked
  name = 'Shubham';
}
