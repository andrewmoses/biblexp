#!/usr/bin/env python
import cgitb,cgi

print "Content-type: text/html\n"


import MySQLdb



#print keyword1
#keyword1='Genesis'


cgitb.enable()

form = cgi.FieldStorage()

#bn="Genesis"
#cp="1"
searchvar=form.getvalue('qry')




user = form.getvalue('unam')


countres = 0

db = MySQLdb.connect("localhost")
cursor = db.cursor()
db.set_character_set('utf8')
cursor.execute('SET NAMES utf8;') 
cursor.execute('SET CHARACTER SET utf8;')
cursor.execute('SET character_set_connection=utf8;')



vnosno = 1

vnosnostart=1

vnosnoend=31102

nsql = """SELECT * FROM books where verno between %s and %s"""
cursor.execute(nsql,(vnosnostart,vnosnoend))
data = cursor.fetchall()


#check if ther is any notes for the verse displaying

msql = "SELECT "+user+" FROM notes where verno between %s and %s"
cursor.execute(msql,(vnosnostart,vnosnoend))
datanot = cursor.fetchall()

notesary=[]

vwnot = []
count=0
for nat in datanot:
    if nat[0]:
        #notes is present
        notesary.append(nat[0])
        vwnot.append(count+vnosnostart)
    count=count+1


for dat in data:
    con=str(dat[4])
    verno=dat[5]

    #check if verno has notes or not
    fag = 0
    notespos=0
    for r in vwnot:
        if verno == r:
            #verno present
            fag=1
            break

        notespos=notespos+1

    if fag==0:
        #not present
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
                    
                    #first verse of the chapter display with book name chapter name and verse number else only the verse
                    #print the selected verse in bold

                    onevar = head + tailver

                    res = onevar.lower().find(searchvar.lower())

                    reshead = head.lower().find(searchvar.lower())

                    restailver = tailver.lower().find(searchvar.lower())

                    if res>-1:
                        countres = countres + 1

                        print '<li class="list-group-item"> <a href="#"><h2>'+str(dat[1])+' '+str(dat[2])+':'+str(dat[3])+'</h2></a> <i>'+head+'</i> <br>'+tailver+'</li>'
                        

                    break
                

                
                
            
        else: 
            mainwv=str(dat[4])
            for wgo in range(len(mainwv)):
                if not mainwv[wgo].isdigit():
                    mainwov=mainwv[wgo:len(mainwv)]
                    booknam=str(dat[1])
                    wobooknam=booknam[0:len(booknam)-2].replace(" ","")
                    #first verse of the chapter display with book name chapter name and verse number else only the verse

                    onevar1 = mainwov

                    res1 = onevar1.lower().find(searchvar.lower())

                    if res1>-1:
                        countres = countres + 1

                        print '<li class="list-group-item"> <a href="#"><h2>'+str(dat[1])+' '+str(dat[2])+':'+str(dat[3])+'</h2></a>'+mainwov+'</li>'
                   
                            
                        
                       

                        
                    
                            
                        
                        
                    break

    else:
        #notes is present
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
                    
                    #first verse of the chapter display with book name chapter name and verse number else only the verse
                    #print the selected verse in bold

                    onevar2 = head + tailver + notesary[notespos]

                    res2 = onevar2.lower().find(searchvar.lower())

                    if res2>-1:
                        countres = countres + 1

                        print '<li class="list-group-item"> <a href="#"><h2>'+str(dat[1])+' '+str(dat[2])+':'+str(dat[3])+'</h2></a> <i>'+head+'</i> <br>'+tailver+'<br>notes: '+notesary[notespos]+'</li>'
                            
                        print 'head'+head
                        print 'book: '+str(dat[1])
                        print 'chapter: '+str(dat[2])
                        print 'verse: '+str(dat[3])
                        print tailver

                        print 'notes: '+notesary[notespos]

                        
                            

                    
                    break
                

                
                
            
        else: 
            mainwv=str(dat[4])
            for wgo in range(len(mainwv)):
                if not mainwv[wgo].isdigit():
                    mainwov=mainwv[wgo:len(mainwv)]
                    booknam=str(dat[1])
                    wobooknam=booknam[0:len(booknam)-2].replace(" ","")
                    #first verse of the chapter display with book name chapter name and verse number else only the verse

                    onevar3 = mainwov + notesary[notespos]

                    res3 = onevar3.lower().find(searchvar.lower())

                    if res3>-1:

                        countres = countres + 1

                        print '<li class="list-group-item"> <a href="#"><h2>'+str(dat[1])+' '+str(dat[2])+':'+str(dat[3])+'</h2></a> '+mainwov+'<br>notes: '+notesary[notespos]+'</li>'
                   
                            
                        
                       

                        
                    
                            
                        
                        
                    break


print '!!!#Found: '+str(countres)

db.commit()
db.close() 











 
