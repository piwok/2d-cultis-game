export class GamepadHandler {
    constructor () {
        this.pad_index = null
        window.addEventListener('gamepadconnected', (event) => {
        this.pad_index = event.gamepad.index})
        this.leftRightLS = 0
        this.upDownLS = 0
        this.leftRightRS = 0
        this.upDownRS = 0
        this.A_button_pressed = false
        this.B_button_pressed = false
        this.X_button_pressed = false
        this.Y_button_pressed = false
    }

    updateButtonsStatus () {
        if (this.pad_index != null) {
            const buttons = navigator.getGamepads()[this.pad_index].buttons
            const axes = navigator.getGamepads()[this.pad_index].axes
            this.leftRightLS = axes[0]
            this.upDownLS = axes[1]
            this.leftRightRS = axes[2]
            this.upDownRS = axes[3]
            this.A_button_pressed = buttons[0].pressed
            this.B_button_pressed = buttons[1].pressed
            this.X_button_pressed = buttons[2].pressed
            this.Y_button_pressed = buttons[3].pressed
        }
    }
}