#!/usr/bin/env python


import cgitb,cgi

print "Content-type: text/html\n"



import MySQLdb


cgitb.enable()

form = cgi.FieldStorage()

#bn="Genesis"
#cp="1"

reference = form.getvalue('ref')


user = form.getvalue('unam')

#print keyword1
#keyword1='Genesis'
try:
    import simplejson as json
except (ImportError,):
    import json

result = json.loads(reference)

book=[]
chap=[]
verse=[]
rpos=0
for i in result:
	lenfi=len(i)
	for j in range(lenfi):
		if i[j]=='-':
			#split the chap
			if not i[j-1].isdigit():
				#its the book name
				bookn=i[1:j]
				rpos=j
				book.append(bookn)
			else:
				#its a chapter
				rpos=rpos+1
				chapn=i[rpos:j]
				chap.append(chapn)
				versen=i[j+1:lenfi]
				verse.append(versen)







db = MySQLdb.connect("localhost")
cursor = db.cursor()
db.set_character_set('utf8')
cursor.execute('SET NAMES utf8;') 
cursor.execute('SET CHARACTER SET utf8;')
cursor.execute('SET character_set_connection=utf8;')        

vnosnolist=[]        
for run in range(len(result)):
	sql = """SELECT * FROM books where nbook=%s and chapter=%s and verse=%s"""
	cursor.execute(sql,(book[run],chap[run],verse[run]))
	dataofv = cursor.fetchall()


	for dai in dataofv:
	    vnosno=dai[5]
	    vnosnolist.append(vnosno)

vnosnolist.sort()

ncheck="empty"

notesary = []

for ran in range(len(vnosnolist)):
	sql = """SELECT * FROM books where verno=%s"""
	cursor.execute(sql,vnosnolist[ran])
	dataofv = cursor.fetchall()
	#for the notes
	nsql = "SELECT "+user+" FROM notes where verno=%s"
	cursor.execute(nsql,vnosnolist[ran])
	dataofn = cursor.fetchall()

	if ran>0:
		#its second verse and not first (ran)
		fro = vnosnolist[ran-1]
		dow = vnosnolist[ran]
		#checking if the verse is next to the previous verse
		if dow == fro+1:
			for dai in dataofv:
				bookfp=dai[1]
				chapfp=dai[2]
				versefp=dai[3]
				contentfp=dai[4]
				print "<br>" + contentfp

			for poda in dataofn:
				notee = poda[0]
				if notee:
					#its not empty
					if ncheck == "empty":
						#its frist notes or there is not prevously notes displayed among the selected verses
						ncheck = notee
						notesary.append(ncheck)
						print "<br><i>" + ncheck + "</i>"
					else:
						#thr is already a notes check if its the same
						if ncheck == notee:
							#its the same note so dont print it
							varoo = "dont do anython"
						else:
							#its different
							ncheck = notee
							notesary.append(ncheck)
							print "<br><i>" + ncheck + "</i>"			

		else:
			#its a different a verse ref shld come
			for dai in dataofv:
				bookfp=dai[1]
				chapfp=dai[2]
				versefp=dai[3]
				contentfp=dai[4]
				print "<br><br>" + bookfp + " " + str(chapfp) + ":" + str(versefp) + "<br>" + contentfp
			for poda in dataofn:
				notee = poda[0]
				if notee:
					#its not empty
					if ncheck == "empty":
						#its frist notes or there is not prevously notes displayed among the selected verses
						ncheck = notee
						notesary.append(ncheck)
						print "<br><i>" + ncheck + "</i>"
					else:
						#thr is already a notes check if its the same
						if ncheck == notee:
							#its the same note so dont print it
							varooo = "dont do anython"
						else:
							#its different
							ncheck = notee
							notesary.append(ncheck)
							print "<br><i>" + ncheck + "</i>"  


	else:
		for dai in dataofv:
			bookfp=dai[1]
			chapfp=dai[2]
			versefp=dai[3]
			contentfp=dai[4]
			print bookfp + " " + str(chapfp) + ":" + str(versefp) + "<br>" + contentfp
		
		for poda in dataofn:
			notee = poda[0]
			if notee:
				#its not empty
				if ncheck == "empty":
					#its frist notes or there is not prevously notes displayed among the selected verses
					ncheck = notee
					notesary.append(ncheck)
					print "<br><i>" + ncheck + "</i>"
				else:
					#thr is already a notes check if its the same
					if ncheck == notee:
						#its the same note so dont print it
						varddd = "dont do anythong"
					else:
						#its different
						ncheck = notee
						notesary.append(ncheck)
						print "<br><i>" + ncheck + "</i>"


notestring = '  ~  '.join(notesary)
print '!!!#'+notestring

vnosnoall = []
for man in vnosnolist:
	vnosnoall.append(str(man))

vnosnoallsingle = ','.join(vnosnoall)
print '!!!!#'+vnosnoallsingle
	

db.commit()
db.close() 











 
