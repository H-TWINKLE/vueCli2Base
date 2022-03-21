declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}

declare module 'vue-xss'
declare module 'element-ui/lib/locale/lang/*' {
    export const elementLocale: any
}
