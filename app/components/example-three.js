import Component from '@glimmer/component';
import { action } from '@ember/object';
import { getRandomNumber } from '../utils/getRandNum';
import { tracked } from '@glimmer/tracking';
import {
  task,
  restartableTask,
  enqueueTask,
  dropTask,
  keepLatestTask,
} from 'ember-concurrency';

export default class ExampleThreeComponent extends Component {
  //   @task({ restartable: true })
  //   @task({ enqueue: true })
  //   @task({ drop: true })
  @task({ keepLatest: true })
  *getNumberTask() {
    const randNum = yield getRandomNumber();
    console.log('Received: ', randNum);
    return randNum;
  }
}
