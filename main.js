var a=axios.get('http://localhost:3000/client') .then(function(response){ 
    var txt="";
info=response.data
txt+="<div class='row'>"
for (x in info) 
{
txt += "<div class='box' ><img src='"+info[x].image+"' alt='image failed to load'><p>" + info[x].name + "</p>"
txt +="<a href='"+info[x].email+"'>"+info[x].email+"</a><div class='button'>"
txt +="<button type='button' class='btn btn-outline-dark'><i class='fa fa-user-o'></i>Profile</button>&nbsp;"
txt+="<button type='button' class='btn btn-outline-dark'><i class='fa fa-envelope-o'></i>Contact</button></div></div>"
  }
  txt+="</div>"
      
 document.getElementById("display").innerHTML = txt; 


} )
