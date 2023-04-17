function detectCollision(object1, object2) {
    return (object1.position.y + object1.size.height >= object2.position.y &&
        object1.position.y <= object2.position.y + object2.size.height &&
        object1.position.x + object1.size.width >= object2.position.x &&
        object1.position.x <= object2.position.x + object2.size.width)
}