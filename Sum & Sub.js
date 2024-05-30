let a = document.getElementById("count-id")
let b = document.getElementById("btn")
let c = document.getElementById("btn-3")
let d = document.getElementById("btn-4")
let x = 0
let count = 0
let z = 0
let summ = 0
let subb = 0
function increment()
{
	count += 1
	a.textContent = count
}

function decrement()
{
	count -= 1
	if(count >= 0)
	{
		a.textContent = count
	}
	else
	{
		count = 0
	}	
}

function output()
{
	summ += count
	subb -= count
	x = count + " , "
	b.innerText += x
	a.textContent = 0
	count = 0
}

function sum()
{
	c.innerText = "SUM\n" + summ
}

function sub()
{
	d.innerText = "SUB\n" + subb
}
