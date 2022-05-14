const sequenceArray = (start = 1, end) => {
    const array = [...Array(end).keys()].map(el => {
        return el + start
    })
    return array;
}

export default sequenceArray
