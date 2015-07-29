#!/usr/bin/env python


import cgitb,cgi

from email.MIMEMultipart import MIMEMultipart
from email.MIMEText import MIMEText
import smtplib

print "Content-type: text/html\n"



import MySQLdb


cgitb.enable()

form = cgi.FieldStorage()

#bn="Genesis"
#cp="1"
username=form.getvalue('unam')
password=form.getvalue('pwd')
mailid = form.getvalue('mailid')

db = MySQLdb.connect("localhost")
cursor = db.cursor()
db.set_character_set('utf8')
cursor.execute('SET NAMES utf8;') 
cursor.execute('SET CHARACTER SET utf8;')
cursor.execute('SET character_set_connection=utf8;')




sql = """SELECT * FROM users where uname = %s"""
cursor.execute(sql,username)
dataofv = cursor.fetchall()

if dataofv:
    #username taken
    print '0'


else:
	nsql = """INSERT INTO users(uname,paswd,email) VALUES(%s,%s,%s)"""
	cursor.execute(nsql,(username,password,mailid))
	#creating a colum in notes table
	notesql = "ALTER TABLE notes ADD "+username+" TEXT(65000)";
	cursor.execute(notesql)
	print '1'





fromaddr = "biblexp@gmail.com"
toaddr = mailid
msg = MIMEMultipart()
msg['From'] = fromaddr
msg['To'] = toaddr
msg['Subject'] = "Welcome to bibleXP"

name = "Hi "+username+","
msg.attach(MIMEText(name, 'plain'))

message = "\n We are so happy to have you on board, \n\n Our goal is to spread the gospel through Internet and your suggestions are very valuable to us.\n \n We are still in developing stage only, kindly continue to use the site whenever you have time. \n\n If you had found any bug or problem or blunder in the site, please don't hesitate kindly report it to us by email : biblexp@gmail.com.\n\n If the site is not responding kindly give us a call at 9445537210 , 9500174674."
msg.attach(MIMEText(message, 'plain'))
logindetails = "\n\n******************************************\nYour Login details\n******************************************\nUsername: "+username+"\nPassword: "+password+"\n\nThanking you,\n\nbibleXP"
msg.attach(MIMEText(logindetails, 'plain'))
server = smtplib.SMTP('smtp.gmail.com', 587)
server.ehlo()
server.starttls()
server.ehlo()
server.login("biblexp@gmail.com", "bibleisthekey")
text = msg.as_string()
server.sendmail(fromaddr, toaddr, text)



#cp=form.getvalue('cnum')

#print keyword1

db.commit()
db.close() 









 
