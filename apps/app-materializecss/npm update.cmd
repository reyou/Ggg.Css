@echo off
title Title: Ggg Cmd
color 1f
echo "GggMessage: Cmd started." 
echo.
::============================================================================= 
echo "GggMessage: npm update."  
call npm update  
echo. 
::============================================================================= 
echo "GggMessage: npm install."  
call npm install  
echo. 
::=============================================================================
echo "GggMessage: Application ended." 
echo.
pause
::pause>nul