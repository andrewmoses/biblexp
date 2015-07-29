#!/usr/bin/env python


import cgitb,cgi

print "Content-type: text/html\n"



import MySQLdb


cgitb.enable()

form = cgi.FieldStorage()

#bn="Genesis"
#cp="1"
uniid=form.getvalue('uniid')

#print keyword1
#keyword1='Genesis'







db = MySQLdb.connect("localhost")
cursor = db.cursor()
db.set_character_set('utf8')
cursor.execute('SET NAMES utf8;') 
cursor.execute('SET CHARACTER SET utf8;')
cursor.execute('SET character_set_connection=utf8;')




sql = """SELECT * FROM books where verno=%s"""
cursor.execute(sql,uniid)
dataofv = cursor.fetchall()


for dai in dataofv:
    book=dai[1]
    chapter=dai[2]
    verse=dai[3]

print book.replace(" ","")+"!"+str(chapter)+"@"+str(verse)


db.commit()
db.close() 











 
