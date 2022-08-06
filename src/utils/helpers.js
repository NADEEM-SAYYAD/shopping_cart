export const convertStringBoolToBool = (boolStr) => {
    if (boolStr === "true" || boolStr === true) return true
    if (boolStr === "false" || boolStr === false) return false
    return false
}
