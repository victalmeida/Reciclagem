import {combineReducers} from 'redux';

import coletaFrom from  './ColetaForm';
import user from  './User';
import SolicitaColeta from  './SolicitaColeta';

export default  combineReducers({
    coletaFrom,
    user,
    SolicitaColeta
});
