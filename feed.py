#!/usr/bin/env python
import cgitb,cgi
cgitb.enable()

from email.MIMEMultipart import MIMEMultipart
from email.MIMEText import MIMEText
import smtplib

print "Content-type: text/html"
print """
    <script>
    window.onload=function fun()
    {
        javascript:top.location = 'index.html';return true;
    }

    </script>
"""
frm = cgi.FieldStorage()

fromaddr = "prayerpoints.bible@gmail.com"
toaddr = "bobbyda.16@gmail.com"
msg = MIMEMultipart()
msg['From'] = fromaddr
msg['To'] = toaddr
msg['Subject'] = "Feed Back!!!"

name = frm.getvalue('name')
msg.attach(MIMEText(name, 'plain'))
email = frm.getvalue('email')
msg.attach(MIMEText(email, 'plain'))
message = frm.getvalue('message')
msg.attach(MIMEText(message, 'plain'))
server = smtplib.SMTP('smtp.gmail.com', 587)
server.ehlo()
server.starttls()
server.ehlo()
server.login("prayerpoints.bible@gmail.com", "********")
text = msg.as_string()
server.sendmail(fromaddr, toaddr, text)
