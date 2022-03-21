import Vue from 'vue'
import Vuex from 'vuex'
import { IUserState } from './modules/user'

Vue.use(Vuex)

// 定义vuex数据接口
export interface DRootState {
    user: IUserState;
}

export default new Vuex.Store<DRootState>({})
