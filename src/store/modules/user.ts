import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import store from '@/store'

/**
 * 定义用户接口
 */
export interface IUserState {
    userInfo: object;
}

// 定义用户接口类
@Module({ dynamic: true, store, name: 'user' })
class UserState extends VuexModule implements IUserState {
    public userInfo = {}

    @Mutation
    public SET_USER_INFO(userInfo: object) {
        this.userInfo = userInfo
    }

    @Action
    public setUserInfo(userInfo: object) {
        this.SET_USER_INFO(userInfo)
    }

    get getUserInfo() {
        return this.userInfo
    }
}

export const UserModule = getModule(UserState)
