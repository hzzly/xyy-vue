import store from '../store'

/** 
*   页面正在请求
*/
export function loading(){
    store.dispatch('showLoading', true);
}

/** 
*   页面请求结束
*/
export function leave(){
    store.dispatch('showLoading', false);
}

/** 
*   Toast公共方法
*/
export function toast(str, icon){
    store.dispatch('showToast', true); 
    if (icon == 'success') {
        store.dispatch('showSuccess', true)
        store.dispatch('showFail', false)
    } else {
        store.dispatch('showSuccess', false)
        store.dispatch('showFail', true)
    }
    store.dispatch('toastMsg',str);
    setTimeout(() => {
        store.dispatch('showToast', false); 
    },2000); 
}