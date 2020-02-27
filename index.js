var parrafo = document.querySelector('h1');
                parrafo.style.cursor = 'pointer';
                parrafo.addEventListener('mouseenter', function(){
                parrafo.style.color = 'black';
                });
                parrafo.addEventListener('mouseleave', function(){
                parrafo.style.color = 'Red';
                }); 
                parrafo.addEventListener('click', function(){
                alert ("Felicitaciones! Lograste crear tu primera web interactiva con botoncito y q tal!");
                })

