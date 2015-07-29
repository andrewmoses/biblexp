#!/usr/bin/env python


import cgitb,cgi

print "Content-type: text/html\n"



import MySQLdb


cgitb.enable()

form = cgi.FieldStorage()

#bn="Genesis"
#cp="1"
bn=form.getvalue('book')
if bn[0].isdigit():
    bn=bn[0]+" "+bn[1:len(bn)]
cp=form.getvalue('cnum')
vp=form.getvalue('vnum')

#print keyword1
#keyword1='Genesis'







db = MySQLdb.connect("localhost")
cursor = db.cursor()
db.set_character_set('utf8')
cursor.execute('SET NAMES utf8;') 
cursor.execute('SET CHARACTER SET utf8;')
cursor.execute('SET character_set_connection=utf8;')



sql = """SELECT * FROM books where nbook=%s and chapter=%s and verse=%s"""
cursor.execute(sql,(bn,cp,vp))
dataofv = cursor.fetchall()


for dai in dataofv:
    vnosno=dai[5]

print vnosno
                
        



db.commit()
db.close() 











 
