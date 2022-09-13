export default class Utils {
  static formatDate = (date) => {
    return `${date.getHours()}:${date.getMinutes()}`
  }
}
