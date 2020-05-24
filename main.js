var a=axios.get('http://localhost:3000/client') .then(function(response){ 
    var data="";
info=response.data
for (index in info) 
{
data += "<div class='box' ><img src='"+info[index].image+"' alt='image failed to load'><p>" + info[index].name + "</p>"
data +="<a href='"+info[index].email+"'>"+info[index].email+"</a>"
data +="<div class='button'><button type='button' ><i class='fa fa-user-o'></i>&nbsp;&nbsp;Profile</button>"
data+="<button type='button' ><i class='fa fa-envelope-o'></i>&nbsp;&nbsp;Contact</button></div></div>"
  }
      
 document.getElementById("display").innerHTML = data; 


} )
