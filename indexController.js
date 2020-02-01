
class indexController{
    
  constructor(){
   
      this.initEvents();
      

  }
  
  initEvents(){
    var elems = document.querySelectorAll('select');
    
    var instances = M.FormSelect.init(elems);
    var instance = M.FormSelect.getInstance(elems);

    var ordem = [];
    var paises = [];
    let cont = 0;
    var tagh = 0; 
    let auxRindex;
    
 
     document.getElementById('button').onclick = function(e){ //click do botao iniciar 

      document.getElementById('button').classList.add("hide");

      document.getElementById('drop').classList.remove("hide");
      document.getElementById('dhabit').classList.remove("hide");
      document.getElementById('dbutton2').classList.remove("hide");
     }

     
    document.getElementById('button2').onclick = function(e){ // funcao do botao CONCLUIDO
      var seletor = document.getElementById("seletor");
      var mostra = seletor.options[seletor.selectedIndex].text;
      var num = document.getElementById('habit').value;

      if((mostra=="Selecione um País")||(mostra==null)||(mostra=="")){ //verifica se foi selecionado um país
        alert("Por favor, preencher o campo ''Selecione um País''");
      }
      if(num==""){ //verifica se foi adicionado o numero de habitantes

      alert("Por favor, preencher o campo ''Número de habitantes''");
      }
      if((mostra!="Selecione um País")&&(num!="")){
        alert("Número de habitantes adicionado com sucesso!!");
        document.getElementById('button3').classList.remove("hide");
        document.getElementById('habit').value = ""; 
        document.getElementById("seletor").value = "Selecione um País ";
        
         ordem[cont] = [{pop:num, pais:mostra}];
         paises[cont] = [mostra, num];
         cont++;
         }

      document.getElementById('tabela').classList.remove("hide");
 
      var percorre  = 0;
 
      while(percorre<=ordem.length){

        if((ordem[percorre])==null){
          ordem.splice(percorre, 1);
          
        }
        if((ordem[percorre])==null){
         ordem.splice(percorre, 1);
         
       }
        percorre++;
      }
 
     geraTabela(); 
 
     recPosDel();

     document.getElementById('btnDel1').onclick = function(e){
      
       recPosDel();
       var percorre  = 0;
      
        
       while(percorre<=ordem.length){

         if((ordem[percorre])==null){
           ordem.splice(percorre, 1);
           
         }
         if((ordem[percorre])==null){
          ordem.splice(percorre, 1);
          
        }
         percorre++;
       }
      }
 
    // ------------- FIM FUNCAO CLICK NA TABELA ----------------------//
   
    document.getElementById('btnEdit').onclick = function(e){
      var edit = document.getElementById('txtEdit').value;

      if(edit == ""){
        alert("Por favor Preencher o campo ''Número de habitantes''")
      }else{
        
        var percorre  = 0;
    
       while(percorre<=ordem.length){

         if((ordem[percorre])==null){
           ordem.splice(percorre, 1);
           
         }
       
         percorre++;
       }

        
        ordem[auxRindex-1][0].pop = edit; 
        document.getElementById('txtEdit').value = ""; 
        document.getElementById('btnEdit').classList.add("modal-close");
        geraTabela();
        recPosDel();
      }
 
    }

    document.getElementById('btnDel').onclick = function(e){
      
      var cont = 0;
      var contp = 0;
      var Aux = [];
      var Aux2 = []
      var percorre  = 0;
    
        while(percorre<ordem.length){

          if((ordem[percorre])==null){
            ordem.splice(percorre, 1);
            
          }
        
          percorre++;
        }
        
        ordem.splice((auxRindex-1), 1);
        paises.splice((auxRindex-1), 1);
      
       
        while(cont<ordem.length){

          var popAux = ordem[cont][0].pop;
        var paisAux = ordem[cont][0].pais;
          if(contp!=(auxRindex-1)){
            
            
            Aux[cont] = [{pop:popAux, pais:paisAux}];
            Aux2[cont] = paises[cont];
            
            cont++; 
          }else{
            contp++;
          }
        
          
        }
        
        //ordem.splice(0, ordem.length);
        ordem = [];
        
        paises = Aux2;
        ordem = Aux;
        
        document.getElementById('btnDel').classList.add("modal-close");

        geraTabela();
        recPosDel();
    }

    document.getElementById('btnOrdHab').onclick = function(e){
        
      if(tagh==0){
        OrdenaHab();
        tagh++;
      }else{
        OrdenaHab();
        ordem.reverse();
        tagh = 0; 
      }
      geraTabela();
      recPosDel();
    }

      }
      // ---------------------- FIM BOTAO CONCLUIDO -----------------------// 

document.addEventListener('DOMContentLoaded', function() {
  
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
  });


//-------------------------- FUNCAO GERA TABELA -------------------------// 
function geraTabela() { 

  let lok = 0;

  var ac = document.getElementById('linhas'); //acessa no pai 
  let conta = 0;
  if(ac.childElementCount>0){
   let copy = ac.childElementCount; 
    
  while(conta<copy){
     
    var filho = ac.children[0]; //acessa filho
   
    ac.removeChild(filho);
    conta++;
    
  }

  
}
  while(lok<ordem.length){
    if(ordem[lok]!=null){

    let div = document.createElement('tr');
                     div.innerHTML =`
                     
                     <td >${ordem[lok][0].pais}</td>
                     <td >${ordem[lok][0].pop}

                     <a href="#modal2" data-target="modal2" id="btnDel1" class="waves-effect waves-light btn modal-trigger red " style="float:right; margin-right: 5%">
                     <i href="#modal2" data-target="modal2" id="btnDel1" style="cursor: hand; cursor: pointer" class="material-icons modal-trigger">close</i>

                     <a href="#modal1" data-target="modal1" id="btnEdit1" class="waves-effect waves-light btn modal-trigger " style="float:right;">
                     <i href="#modal1" data-target="modal1" id="btnEdit1" style="cursor: hand; cursor: pointer" class="material-icons modal-trigger">edit</i>
                     </a>
                     
                     </td>
                                             
                     `;
                     document.getElementById('linhas').appendChild(div);
                     
    } 
    lok++;                   
}
}

// ------------- FUNÇAO RECUPERA POSIÇAO ---------------// 
 function recPos() { 

   
   var table = document.getElementById("table"),rIndex,cIndex;
   let f=0;
  
   for(var i = 1; i < table.rows.length; i++) //click na tabela 
   {
       
       for(var j = 0; j < table.rows[i].cells.length; j++)
       {
           table.rows[i].cells[j].onclick = function()
           {
             
               rIndex = this.parentElement.rowIndex;
               cIndex = this.cellIndex+1;

               auxRindex = rIndex;
               auxCindex = cIndex;
           
               var ac = document.getElementById('namePais'); //acessa no pai 
               
               var filho = ac.children[0]; //acessa filho
              
               if(filho!=null){ //verifica se o no pai possui filho
                ac.removeChild(filho); // deleta no filho
                 
               
               }
            
               let divs = document.createElement('a');
               divs.innerHTML =`
                               <label for="disabled">País</label>  
                                <input disabled value="${ordem[auxRindex-1][0].pais}" id="disabled" type="text" class="validate">
                                                         
                                     `;
                                     document.getElementById('namePais').appendChild(divs);
             
          
           };
           
              
             
       }
   
 }
   
 }
// ------------------ FIM FUNÇAO RECUPERA POSIÇAO -----------------------------// 

// ----------------- FUNCAO ORDENA --------// 
function OrdenaHab() {
  ordem.sort(
    function (a,b){
      
      return a[0].pop - b[0].pop; 
      
    }
  );
}


// ---------------- FIM FUNCAO ORDENA 

 function recPosDel() {  // Recupera posicao para o botao delete

  
  var table = document.getElementById("table"),rIndex,cIndex;
  let f=0;
  
  for(var i = 1; i < table.rows.length; i++) 
  {
     
      for(var j = 0; j < table.rows[i].cells.length; j++)
      {
          table.rows[i].cells[j].onclick = function()
          {
            
              rIndex = this.parentElement.rowIndex;
              cIndex = this.cellIndex+1;

              auxRindex = rIndex;
              auxCindex = cIndex;
         
          };
          
             
            
      }
  
}
  
}
}


}