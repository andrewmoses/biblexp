#!/usr/bin/env python


import cgitb,cgi

print "Content-type: text/html\n"



import MySQLdb


cgitb.enable()

form = cgi.FieldStorage()

#bn="Genesis"
#cp="1"
vnosnoo=form.getvalue('vnosno')
vnosno=int(vnosnoo)


#print keyword1
#keyword1='Genesis'
user = form.getvalue('unam')






db = MySQLdb.connect("localhost")
cursor = db.cursor()
db.set_character_set('utf8')
cursor.execute('SET NAMES utf8;') 
cursor.execute('SET CHARACTER SET utf8;')
cursor.execute('SET character_set_connection=utf8;')





vnosnostart=1
if vnosno>40:
    vnosnostart=vnosno-40

vnosnoend=vnosno+40

nsql = """SELECT * FROM books where verno between %s and %s"""
cursor.execute(nsql,(vnosnostart,vnosnoend))
data = cursor.fetchall()

#to check if thr is notes or not
msql = "SELECT "+user+" FROM notes where verno between %s and %s"
cursor.execute(msql,(vnosnostart,vnosnoend))
datanot = cursor.fetchall()

vwnot = []
count=0
for nat in datanot:
    if nat[0]:
        #notes is present
        vwnot.append(count+vnosnostart)
    count=count+1

for dat in data:
    con=str(dat[4])
    verno=dat[5]
    #nsql=""" SELECT * FROM notes WHERE verno=%s """
    #cursor.execute(nsql,verno)
    #ndata=cursor.fetchall()
    fag = 0
    for r in vwnot:
        if verno == r:
            #verno present
            fag=1
            break

    if fag==0:
        #notes not present
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
                    if dat[3]==1:
                        
                        print """

                           <a id="a%s-%s-%s" class="verse" onclick="selectedverse(this.id)">     <br><i>%s</i><br>%s %s <br>%s<br>   </a>    
                        
                        """ %(wobookname,str(dat[2]),str(dat[3]),head,str(dat[1]),str(dat[2]),tailver)
                            

                        
                        
                    else:
                        
                        print """

                         <a id="a%s-%s-%s" class="verse" onclick="selectedverse(this.id)">    <br><i>%s</i><br>%s %s<br>  </a>    
                        
                        """ %(wobookname,str(dat[2]),str(dat[3]),head,str(dat[3]),tailver)
                    
                    break
                    

                    
                    
                
        else: 
            mainwv=str(dat[4])
            for wgo in range(len(mainwv)):
                if not mainwv[wgo].isdigit():
                    mainwov=mainwv[wgo:len(mainwv)]
                    booknam=str(dat[1])
                    wobooknam=booknam[0:len(booknam)-2].replace(" ","")
                    #first verse of the chapter display with book name chapter name and verse number else only the verse
                    if dat[3]==1:
                        
                        print """
                           <a id="a%s-%s-%s" class="verse" onclick="selectedverse(this.id)">      <br>%s %s <br>%s<br>  </a>    

                        """ %(wobooknam,str(dat[2]),str(dat[3]),str(dat[1]),str(dat[2]),mainwov)

                        
                        
                    else:
                        
                        print """
                             <a id="a%s-%s-%s" class="verse" onclick="selectedverse(this.id)">     %s %s<br>   </a>  

                        """ %(wobooknam,str(dat[2]),str(dat[3]),str(dat[3]),mainwov)
                            
                        
                        
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
                    if dat[3]==1:
                        
                        print """

                           <a id="a%s-%s-%s" class = "colman verse" onclick="selectedverse(this.id)">     <br><i>%s</i><br>%s %s <br>%s<br>   </a>    
                        
                        """ %(wobookname,str(dat[2]),str(dat[3]),head,str(dat[1]),str(dat[2]),tailver)
                            

                        
                        
                    else:
                        
                        print """

                         <a id="a%s-%s-%s" class = "colman verse" onclick="selectedverse(this.id)">    <br><i>%s</i><br>%s %s<br>  </a>    
                        
                        """ %(wobookname,str(dat[2]),str(dat[3]),head,str(dat[3]),tailver)
                    
                    break
                    

                    
                    
                
        else: 
            mainwv=str(dat[4])
            for wgo in range(len(mainwv)):
                if not mainwv[wgo].isdigit():
                    mainwov=mainwv[wgo:len(mainwv)]
                    booknam=str(dat[1])
                    wobooknam=booknam[0:len(booknam)-2].replace(" ","")
                    #first verse of the chapter display with book name chapter name and verse number else only the verse
                    if dat[3]==1:
                        
                        print """
                           <a id="a%s-%s-%s" class = "colman verse" onclick="selectedverse(this.id)">      <br>%s %s <br>%s<br>  </a>    

                        """ %(wobooknam,str(dat[2]),str(dat[3]),str(dat[1]),str(dat[2]),mainwov)

                        
                        
                    else:
                        
                        print """
                             <a id="a%s-%s-%s" class = "colman verse" onclick="selectedverse(this.id)">     %s %s<br>   </a>  

                        """ %(wobooknam,str(dat[2]),str(dat[3]),str(dat[3]),mainwov)
                            
                        
                        
                    break

    #for ndat in ndata:
        #ncon=str(ndat[1])

db.commit()
db.close() 











 
