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

#print keyword1
#keyword1='Genesis'







db = MySQLdb.connect("localhost")
cursor = db.cursor()




sql = """SELECT * FROM books where nbook=%s and chapter=%s"""
cursor.execute(sql,(bn,cp))
data = cursor.fetchall()

verary=[]
dis=""
for dat in data:
    verary.append(dat[3])
	
print len(verary)
#for cv in range(len(verary)):
	#print """<li onclick="getPagingfullv(this.id)" id="%s"><a tabindex="-1" href="#">%s</a></li>""" %(str(verary[cv]),str(verary[cv]))
	

    
    
    
    
                    
            
    

   

    



                

                
        



db.commit()
db.close() 











 
