import isNumber from "lodash.isnumber"

export function normalizeUnit(unitValue) {
  return isNumber(unitValue) ? `${unitValue}px` : unitValue
}
