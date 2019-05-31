FROM microsoft/aspnet:4.7.2-windowsservercore-1803

LABEL maintainer="mikhail@corepartners.com" version="0.1"

#COPY ./web/bin/Release/Publish ./inetpub/wwwroot/app

EXPOSE 80
EXPOSE 4022

WORKDIR /inetpub/wwwroot/app

RUN powershell Import-Module WebAdministration ; \
 powershell New-WebApplication -Site '''Default Web Site''' -Name web -PhysicalPath '''C:\inetpub\wwwroot\app''' -ApplicationPool '''.NET v4.5'''