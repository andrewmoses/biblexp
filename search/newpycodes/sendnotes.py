#!/usr/bin/env python


import cgitb,cgi

print "Content-type: text/html\n"



import MySQLdb


cgitb.enable()

form = cgi.FieldStorage()

#bn="Genesis"
#cp="1"

reference = form.getvalue('ref')
realnotes = form.getvalue('notes')
user = form.getvalue('unam')

db = MySQLdb.connect("localhost")
cursor = db.cursor()
db.set_character_set('utf8')
cursor.execute('SET NAMES utf8;') 
cursor.execute('SET CHARACTER SET utf8;')
cursor.execute('SET character_set_connection=utf8;')        

listthevno = reference.split(",")


for run in listthevno:
	sql = "UPDATE notes SET "+user+" =%s WHERE verno = %s"
	cursor.execute(sql,(realnotes,run))


print 'Hurray you have saved a note'

db.commit()
db.close() 











 
