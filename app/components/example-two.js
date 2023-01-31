import Component from '@glimmer/component';
import { action } from '@ember/object';
import { getRandomNumber } from '../utils/getRandNum';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';

export default class ExampleTwoComponent extends Component {
  //   @tracked
  //   displayNumber = null;

  //   @tracked
  //   isLoading = false;

  //   @action
  //   getRandNumber() {
  //     this.isLoading = true;
  //     getRandomNumber().then((randNum) => {
  //       this.displayNumber = randNum;
  //       this.isLoading = false;
  //     });
  //   }

  //   @action
  //   async getRandNumber() {
  //     this.getNumberTask.perform();
  //   }

  @task
  *getNumberTask() {
    return yield getRandomNumber();
  }
}
