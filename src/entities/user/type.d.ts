import { Auth, Author, User } from './index'

declare global {
    interface IAuth extends Auth {}
    interface IAcount extends Author {}
    interface IUser extends User {}
}
