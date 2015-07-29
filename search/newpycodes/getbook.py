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
#cp=form.getvalue('cnum')

#print keyword1
#keyword1='Genesis'







db = MySQLdb.connect("localhost")
cursor = db.cursor()
db.set_character_set('utf8')
cursor.execute('SET NAMES utf8;') 
cursor.execute('SET CHARACTER SET utf8;')
cursor.execute('SET character_set_connection=utf8;')



sql = """SELECT * FROM books where nbook=%s"""
cursor.execute(sql,(bn))
data = cursor.fetchall()



for dat in data:
    con=str(dat[4])
    verno=dat[5]
    #nsql=""" SELECT * FROM notes WHERE verno=%s """
    #cursor.execute(nsql,verno)
    #ndata=cursor.fetchall()

    #for ndat in ndata:
        #ncon=str(ndat[1])
    if not con[0].isdigit():
        #it has a heading
        totsize=len(con)
        for v in range(totsize):
            if con[v].isdigit():
                head=con[0:v]
                tail=con[v:totsize]
                tailchap=''
                tailver=''
                for vgo in range(len(tail)):
                    if not tail[vgo].isdigit():
                        tailchap=tail[0:vgo]
                        tailver=tail[vgo:len(tail)]
                        break
                bookname=str(dat[1])
                wobookname=bookname[0:len(bookname)-2].replace(" ","")
                

                
                print """

                    <div id="a%s-%s-%s">Heading: %s<br>Book: %s Chapter: %s Verse: %s<br>%s<br></div>
                    
                    """ %(wobookname,str(dat[2]),str(dat[3]),head,str(dat[1]),str(dat[2]),str(dat[3]),tailver)
                break
            
    else: 
        mainwv=str(dat[4])
        for wgo in range(len(mainwv)):
            if not mainwv[wgo].isdigit():
                mainwov=mainwv[wgo:len(mainwv)]
                booknam=str(dat[1])
                wobooknam=booknam[0:len(booknam)-2].replace(" ","")
                print """
                    <div id="a%s-%s-%s">Book: %s Chapter: %s Verse: %s<br>%s<br></div>

                    """ %(wobooknam,str(dat[2]),str(dat[3]),str(dat[1]),str(dat[2]),str(dat[3]),mainwov)
                break
    

    
    
    
    
                    
            
    

   

    



                

                
        



db.commit()
db.close() 











 
