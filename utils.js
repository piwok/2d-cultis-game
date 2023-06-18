export function drawStatusText (context_2D, input_handler, vessel) {
    context_2D.font = '20px Helvetica'
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
        
    }
   
}
