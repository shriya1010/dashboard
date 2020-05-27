axios.get('http://localhost:3000/client') .then(function(response){ 
    
var info=response.data
var data="",index,i;
for (index in info) 
{
data += "<div class='box' ><img src='"+info[index].image+"' alt='image failed to load'><p>" + info[index].name + "</p>"
data +="<a href='"+info[index].email+"'>"+info[index].email+"</a><div class='contact'>"

for(i=0;i<(info[index].contact).length;i++)
{
  data += "<img src='"+info[index].contact[i]+"' alt='image failed to load'>"
}

data +="</div><div class='button'><button type='button' class='buttonhover'><i class='fa fa-user-o'></i>&nbsp;&nbsp;Profile</button>"
data+="<button type='button' class='buttonhover'><i class='fa fa-envelope-o'></i>&nbsp;&nbsp;Contact</button></div></div>"
  }
      
 document.getElementById("display").innerHTML = data; 


} )
