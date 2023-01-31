import Component from '@glimmer/component';
import { action } from '@ember/object';
import { getRandomNumber } from '../utils/getRandNum';
import { tracked } from '@glimmer/tracking';

export default class ExampleOneComponent extends Component {
  @tracked
  displayNumber = null;

  @tracked
  isLoading = false;

  //   @action
  //   getRandNumber() {
  //     this.isLoading = true;
  //     getRandomNumber().then((randNum) => {
  //       this.displayNumber = randNum;
  //       this.isLoading = false;
  //     });
  //   }

  @action
  async getRandNumber() {
    this.isLoading = true;
    const randNum = await getRandomNumber();
    this.displayNumber = randNum;
    this.isLoading = false;
  }
}
