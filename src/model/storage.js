const storage = {

    /*新添加缓存*/
    set(key, val) {
        localStorage.setItem(key, JSON.stringify(value));
    },


    /*获取缓存*/
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    },

    /*删除缓存*/
    remove(key) {
        localStorage.removeItem(key)
    }
};

export default storage;