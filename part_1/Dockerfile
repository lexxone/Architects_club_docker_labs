FROM microsoft/aspnet:4.7.2-windowsservercore-1803

LABEL maintainer="mikhail@corepartners.com" version="0.1"

COPY ./bin/Release/Publish ./inetpub/wwwroot/app

EXPOSE 80

RUN powershell Import-Module WebAdministration

RUN powershell New-WebApplication -Site '''Default Web Site''' -Name web -PhysicalPath '''C:\inetpub\wwwroot\app''' -ApplicationPool '''.NET v4.5'''