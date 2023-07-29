export function drawStatusText (context_2D, input_handler, vessel, projectile_vessel, number_frames, total_time) {
    context_2D.font = '25px Helvetica'
    context_2D.fillStyle = 'black'
    context_2D.fillText('State is: ' + vessel.current_state.state, 25, 50)
    context_2D.fillText(`FPS: ${Math.round(number_frames/(total_time/1000))}`, 900, 50)
    context_2D.fillText(`projectile state: ${projectile_vessel.current_state.state}`, 900, 100)
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
        context_2D.fillText(`Position: ${vessel.position.x}, ${vessel.position.y}`, 25, 550)
        context_2D.fillText(`Double Jump Lock: ${vessel.double_jump_lock}`, 25, 600)
        context_2D.fillText(`Right trigger button value: ${input_handler.Right_trigger}`, 25, 650)
        context_2D.fillText(`Left trigger button value: ${input_handler.Left_trigger}`, 25, 700)
        context_2D.fillText(`Dash done: ${vessel.dash_done}`, 25, 750)
        
    }
   
}

export function detectCollision(object1, object2) {
    return (object1.position.y + object1.current_state.hitbox.height >= object2.position.y &&
        object1.position.y <= object2.position.y + object2.size.height &&
        object1.position.x + object1.current_state.hitbox.width >= object2.position.x &&
        object1.position.x <= object2.position.x + object2.size.width)
}
