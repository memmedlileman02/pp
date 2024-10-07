$(document).ready(function(){
    $('#bars').click(function(){
        $('#bars').css('display','none');
        $('#arrow').css('display','block');
    });
    
    $('#arrow').click(function(){
      $('#bars').css('display','block');
      $('#arrow').css('display','none');
  });
  });
  
  
    
    function openNav() {
    document.getElementById("mySidenav").style.opacity = "1";
    document.getElementById("mySidenav").style.width = "100%";
    }
    function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.opacity = "0";
    
    }
  
    
    function openTab(evt,tabName){
      var i, tabcontent, tablinks;
    
      tabcontent = document.getElementsByClassName('tabcontent');
    
      for(i=0;i<tabcontent.length;i++){
          tabcontent[i].style.display='none';
          
      }
    
      tablinks = document.getElementsByClassName('tablinks');
      for(i=0;i<tablinks.length;i++){
          tablinks[i].className = tablinks[i].className.replace(" active","");
      }
          document.getElementById(tabName).style.display = "block";
          evt.currentTarget.className += " active";
    
    
    }
  
  
  
    $(document).ready(function(){
      $(window).scroll(function(){
        if($(window).scrollTop() > 20){
          $('#header').css('background-color','#d4ecfa');
          $('#header').css('margin-top','-0px')
        }
        else{
          $('#header').css('background-color','transparent');
          $('#header').css('margin-top','-4px')
        }
      })
    })
    
    