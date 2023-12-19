from firebase import firebase #import packages
import serial #import packages
import time #import packages
firebase = firebase.FirebaseApplication('https://fan1-c1e30-default-rtdb.firebaseio.com/', None) #locate database
ser = serial.Serial("COM6")# locate serial
ser.baudrate = 115200 #find baudrate
print(ser) #print for the test


def onoff(): #making this function before entering the while loop phase so code recognises the "onoff()
    result = firebase.get('/Data', 'Condition')
    return result










while True: #this is making an infinite loop so tht it is always searching for stats of 'condition' being off or on
    res = onoff() # Code searches condtion of 'Data' to know to display a tick or x on L.E.D display
    data = res+"," # getting the code to identify and react to "," and to delete it using abstraction
    if res == 'on':
        ser.write(data.encode()) # the result is being encoded
        print(res)# If its on then print on for the user
    elif res =='off':
        ser.write(data.encode()) # Result is being encoded
        print(res)# If it's off then print off for the user
        time.sleep(1) # one second waiting period