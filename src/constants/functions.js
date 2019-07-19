export const clientAreaPos = (e) => {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;
    return { x: x, y: y }
}

export const generateRect = (points) => {
    if (points.length < 4)
        return { x1: 0, y1: 0, x2: 0, y2: 0 }
    let x1 = points[0].x, x2 = points[0].x
    let y1 = points[0].y, y2 = points[0].y
    for (let i = 1; i < points.length; ++i) {
        x1 = Math.min(x1, points[i].x)
        x2 = Math.max(x2, points[i].x)
        y1 = Math.min(y1, points[i].y)
        y2 = Math.max(y2, points[i].y)
    }
    return { x1, y1, x2, y2 }
}

export const getBoundPoints = (rect) => {
    let pts = []
    let width = (rect.x2 - rect.x1) / 2
    let height = (rect.y2 - rect.y1) / 2

    for (let i = 0; i <= 2; ++i) {
        for (let j = 0; j <= 2; ++j) {
            if (i === 1 && j === 1) {
                continue
            }
            pts.push({ x: rect.x1 + width * i, y: rect.y1 + height * j })
        }
    }
    return pts
}