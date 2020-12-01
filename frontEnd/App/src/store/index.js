import { createStore } from 'redux';
import rootStore from  './Reducer/index.js';


const store =  createStore(rootStore);

export default store;