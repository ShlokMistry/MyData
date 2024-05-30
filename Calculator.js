let x=document.getElementById("count");
function zero()
{
	x.textContent+=0;
}
function one()
{
	x.textContent+=1
}
function two()
{
	x.textContent+=2
}
function three()
{
	x.textContent+=3
}
function four()
{
	x.textContent+=4
}
function five()
{
	x.textContent+=5
}
function six()
{
	x.textContent+=6
}
function seven()
{
	x.textContent+=7
}
function eight()
{
	x.textContent+=8
}
function nine()
{
	x.textContent+=2
}
function dot()
{
	x.textContent+= '.'
}
function sum()
{
	x.textContent+= '+'
}
function sub()
{
	x.textContent+= '-'
}
function mul()
{
	x.textContent+= '*'
}
function div()
{
	x.textContent+= '/'
}
function del()
{
	x.textContent = x.textContent.slice(0, -1);
}
function ac()
{
	x.textContent= ' '
}
function isequalto()
{
	x.textContent=eval(x.textContent);
}
