from firebase import firebase
import serial
import time
firebase = firebase.FirebaseApplication('https://fan1-c1e30-default-rtdb.firebaseio.com/', None)
ser = serial.Serial("COM5")
ser.baudrate = 115400
print(ser)

def onoff():
    result = firebase.get('/Data', 'Condition')
    return result








while True:
    res = onoff()
    data = res+","
    if res == 'on':
        ser.write(data.encode())
        print(res)
    elif res =='off':
        ser.write(data.encode())
        print(res)
        