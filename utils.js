export function drawStatusText (context_2D, input_handler, vessel) {
    context_2D.font = '25px Helvetica'
    context_2D.fillStyle = 'black'
    context_2D.fillText('State is: ' + vessel.current_state.state, 25, 50)
    if (input_handler.pad_index != null) {
        context_2D.fillText(`Left Stick leftright value: ${input_handler.leftRightLS}`, 25, 100)
        context_2D.fillText(`Left Stick updown value: ${input_handler.upDownLS}`, 25, 150)
        context_2D.fillText(`Right Stick leftright value: ${input_handler.leftRightRS}`, 25, 200)
        context_2D.fillText(`Right Stick upDown value: ${input_handler.upDownRS}`, 25, 250)
        context_2D.fillText(`A button value: ${input_handler.A_button_pressed}`, 25, 300)
        context_2D.fillText(`B button value: ${input_handler.B_button_pressed}`, 25, 350)
        context_2D.fillText(`X button value: ${input_handler.X_button_pressed}`, 25, 400)
        context_2D.fillText(`Y button value: ${input_handler.Y_button_pressed}`, 25, 450)
        context_2D.fillText(`is on ground: ${vessel.isOnGround()}`, 25, 500)
        
    }
   
}

export function detectCollision(object1, object2) {
    return (object1.position.y + object1.hitbox.height >= object2.y &&
        object1.position.y <= object2.y + object2.height &&
        object1.position.x + object1.width >= object2.x &&
        object1.position.x <= object2.x + object2.width)
}
