#!/usr/bin/env python


import cgitb,cgi

print "Content-type: text/html\n"



import MySQLdb


cgitb.enable()

form = cgi.FieldStorage()

#bn="Genesis"
#cp="1"
username=form.getvalue('unam')
password=form.getvalue('pwd')


db = MySQLdb.connect("localhost")
cursor = db.cursor()
db.set_character_set('utf8')
cursor.execute('SET NAMES utf8;') 
cursor.execute('SET CHARACTER SET utf8;')
cursor.execute('SET character_set_connection=utf8;')




sql = """SELECT * FROM users where uname = %s"""
cursor.execute(sql,username)
dataofv = cursor.fetchall()

fag=0
if dataofv:
	for ch in dataofv:
		if ch[2]==password:
			fag=1



print fag

#cp=form.getvalue('cnum')

#print keyword1

db.commit()
db.close() 









 
