import Component from '@glimmer/component';
import { action } from '@ember/object';
import { getRandomNumber } from '../utils/getRandNum';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';

export default class ExampleFourComponent extends Component {
  @tracked
  hasError = false;

  //   @task
  //   *getNumberTask() {
  //     this.hasError = false;
  //     try {
  //       const randNum = yield getRandomNumber();
  //       if (randNum > 50) {
  //         throw new Error('Something wrong!');
  //       }
  //       console.log('Received: ', randNum);
  //       return randNum;
  //     } catch (error) {
  //       this.hasError = true;
  //     }
  //   }

  @task
  *getNumberTask() {
    const randNum = yield getRandomNumber();
    if (randNum > 50) {
      throw new Error('Something wrong!');
    }
    console.log('Received: ', randNum);
    return randNum;
  }

  @action
  cancel() {
    this.getNumberTask.cancelAll();
  }
}
