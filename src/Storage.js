class Storage {
  /**
   * @param {key} key
   * @param {value} value
   */
  static set_data(key, value) {
    let ls_data_arry = [];
    if (localStorage.getItem(key)) {
      ls_data_arry = JSON.parse(localStorage.getItem(key));
    }
    ls_data_arry.push(value);
    localStorage.setItem(key, JSON.stringify(ls_data_arry));
  }

  /**
   * @param {key} key
   * @returns
   */
  static get_data(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  static show_data(index) {
    alert(index);
  }
}
export default Storage;
