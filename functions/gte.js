
const compare = require('./compare')

module.exports = function gte (a, b, loose) {
  return compare(a, b, loose) >= 0
}