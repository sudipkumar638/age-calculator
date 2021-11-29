let year=document.getElementById("year");
let month=document.getElementById("month");
let day=document.getElementById("day");
let buttn=document.getElementById("but");


 let currday=new Date().getDate();
 let curryear=new Date().getFullYear();
 let currmonth=new Date().getMonth();

 

buttn.addEventListener("click",()=>{
  

     if(year.value=='')
     {
        alert("Plzz Enter Your Birth Year");
     }
  

     else if(month.value=='')
     {
        alert("Plzz Enter Your Birth Month");

     }

     else if(day.value=='')
     {
        alert("Plzz Enter Your Birth Day");
     }

     else
     {

     
   if(curryear-year.value<0)
   {
      document.getElementById("yrres").innerHTML=(curryear-year.value)*(-1);
   }
   else{
      document.getElementById("yrres").innerHTML=curryear-year.value;
   }

   if((currmonth-month.value+1)<0)
   {
      document.getElementById("monres").innerHTML=(currmonth-month.value+1)*(-1);
   }
   else{
      document.getElementById("monres").innerHTML=currmonth-month.value+1;
   }

   if(currday-day.value<0)
   {
      document.getElementById("dayres").innerHTML=(currday-day.value)*(-1);
   }
   else{
      document.getElementById("dayres").innerHTML=currday-day.value;
   }
}
   

})