var seatNo = 40

var s=1;
for(let i=0;i<9;i++)
{
    s = s+3
    if(seatNo==s)
    console.log("Your Seat is: Lower Berth")
    s = s+5
    if(seatNo==s)
    console.log("Your Seat is: Lower Berth")
}
var su=2
for(let i=0;i<9;i++)
{
    su = su+3
    if(seatNo==su)
    console.log("Your Seat is: Middle Berth")
    su = su+5
    if(seatNo==su)
    console.log("Your Seat is: Middle Berth")
}
var sum=3
for(let i=0;i<9;i++)
{
    sum = sum+3
    if(seatNo==sum)
    console.log("Your Seat is: Upper Berth")
    sum = sum+5
    if(seatNo==sum)
    console.log("Your Seat is: Upper Berth")
}
var n=7
for(let i=0; i<9;i++)
{
    n+=8
    if(seatNo==n)
    console.log("Your Seat is: Side Lower Berth")
}
if(seatNo%8==0)
{
    console.log("Your Seat is: Side Upper Berth")
}
