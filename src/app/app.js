import {Component, View} from 'angular2/angular2';
import {bindActionCreators} from 'redux';
import {Counter} from './components/Counter';
import * as CounterActions from './actions/CounterActions';
import { Inject } from 'angular2/angular2';

@Component({
  selector: 'app',
  directives: [Counter],
  template: `
  <counter [counter]="counter"
    [increment]="increment"
    [decrement]="decrement"
    [increment-if-odd]="incrementIfOdd"
    [increment-async]="incrementAsync">
  </counter>
  `
})
export class App {
  
  constructor(@Inject('ngRedux') ngRedux) {
    this.unsubscribe = ngRedux.connect(this.mapStateToThis, this.mapDispatchToThis)(this);
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  mapStateToThis(state) {
    return {
      counter: state.counter
    };
    
  }

  mapDispatchToThis(dispatch) {
    return bindActionCreators(CounterActions, dispatch);
  }
}
