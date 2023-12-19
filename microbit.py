def on_data_received():
    global Duty
    if serial.read_until(serial.delimiters(Delimiters.COMMA)) == "on":
        basic.show_icon(IconNames.YES)
        while Duty < 1023:
            pins.analog_write_pin(AnalogPin.P0, Duty)
            Duty = Duty + 1
            basic.pause(10)
    else:
        basic.show_icon(IconNames.NO)
        while Duty > 0:
            pins.analog_write_pin(AnalogPin.P0, Duty)
            Duty = Duty - 1
            basic.pause(10)
serial.on_data_received(serial.delimiters(Delimiters.COMMA), on_data_received)


Duty = 0
serial.redirect(SerialPin.USB_TX, SerialPin.USB_RX, BaudRate.BAUD_RATE115200)
serial.redirect_to_usb()