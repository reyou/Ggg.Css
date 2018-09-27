@echo off
title Title: Ggg Cmd
color 1f
echo "GggMessage: Cmd started." 
echo.
::============================================================================= 
call npm install express --save  
echo "GggMessage: express installed."  
echo.
::============================================================================= 
echo "GggMessage: npm install qs --save." 
call npm install qs --save   
echo.
::============================================================================= 
echo "GggMessage: npm install debug --save." 
call npm install debug --save   
echo.
::============================================================================= 
:: http://materializecss.com/getting-started.html
call npm install materialize-css --save
echo "GggMessage: materialize-css." 
echo.
::=============================================================================
echo "GggMessage: Application ended." 
echo.
pause
::pause>nul