const errorUtil = (err) => {
    let newError = new Error(
        [
            err,
            `\n\tActual Value (WHAT WE GOT)`,
            `\n\t  ${JSON.stringify(err.actual, null, '\t  ')}`,
            `\n\tExpect Value (WHAT WE WANTED)`, 
            `\n\t  ${JSON.stringify(err.expected, null, '\t  ')}`
        ]
    )
    return newError
}

const descUtil = (method, route, sm, lm) => {
    let string = `${method.toUpperCase()} /${route.split(' ').join('/')} ::${sm}::${lm.charAt(0).toUpperCase() + lm.slice(1)}`
    return string
}

module.exports = {
    errorUtil, 
    descUtil
}