((Get-Content -path .\Views\Home\Index.cshtml -Raw) -replace 'Docker','from Docker container') | Set-Content -Path .\Views\Home\Index.cshtml
Write-Output "Header changed"