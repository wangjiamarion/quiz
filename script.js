/**********************************
************Quiz Controller********
**********************************/
var quizController = (function(){
    
    function Question(id, questionText, opts, correctAnswer){
        this.id=id;
        this.questionText=questionText;
        this.opts=opts;
        this.correctAnswer=correctAnswer
    }
    var questionStorage = {
        setQuestionCollection: function(newCollection){
            localStorage.setItem('questionCollection', JSON.stringify(newCollection));
        },
        getQuestionCollection: function (){
        return JSON.parse(localStorage.getItem('questionCollection'));
        },
        removeQuestionCollection: function(){
            localStorage.removeItem('questionCollection');
        }
    };
     if(questionStorage.getQuestionCollection()===null){
                questionStorage.setQuestionCollection([]);
            };
    //*******************Person Contructor***********************
    
    function Person(id, firstName, lastName, score){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.score=score
    };
    var currentPerson={
        fullName:['',''],
        score:0
    };
    var admin={
        firstName:"Jia",
        lastName:"Wang-Connelly"
    };
    
     var personStorage = {
        setPersonStorage: function(newPerson){
            localStorage.setItem('personData', JSON.stringify(newPerson));
        },
        getPersonStorage: function (){
        return JSON.parse(localStorage.getItem('personData'));
        },
        removePersonStorage: function(){
            localStorage.removeItem('personData');
        }
    };
     if(personStorage.getPersonStorage()===null){
                personStorage.setPersonStorage([]);
            };
    if(questionStorage.getQuestionCollection()===null){
                questionStorage.setQuestionCollection([]);
            }; 
    
    return {
        getQuestionLocalStorage:questionStorage,
        addQuestionOnLocalStorage: function(newQuestionText,opts){
            
            var optionArr, corrAnswer, questionId, newQuestion, getQuestionStor;
            //getQuestionStor=[];
            
            optionArr=[];
            //questionStorage.setQuestionCollection ([]);????? length for id issue
            //*****************************options********************
            for (var i = 0; i < opts.length; i++){
                if(opts[i].value !=='') {
                    optionArr.push(opts[i].value);
                    /*???????????????
                    document.getElementsByName('answer')[document.getElementsByName('answer').length-1].addEventListener('focus', function(){
                        newDiv=document.createElement('div')
                     document.getElementsByName('answer')[document.getElementsByName('answer').length-1].parentElement.appendChild(newDiv)
                        console.log(newDiv)
                    })
                    */
                }
                if(opts[i].previousElementSibling.checked && opts[i].value !==""){
                    corrAnswer = opts[i].value}
            }
            //console.log(typeof corrAnswer)
          //*****************************iD*********************
            if(questionStorage.getQuestionCollection()===null){
                questionStorage.setQuestionCollection([]);
            } 
            if (questionStorage.getQuestionCollection().length > 0){
                questionId=questionStorage.getQuestionCollection()[questionStorage.getQuestionCollection().length - 1].id + 1;
            } else { 
                questionId = 0;  
            }
            //*****************************localStorage*********************
            newQuestion = new Question(questionId, newQuestionText.value, optionArr, corrAnswer);
            getQuestionStor = questionStorage.getQuestionCollection();
             
            /*var total='';
            optionArr.forEach(sum);
            
             function sum(text){
                return total +=text;
            }
            console.log(typeof optionArr[0]);
            console.log(total);
            if(newQuestionText.value!=='' && total !==''){
               };*/
            //***********give alerts*************
            if(newQuestionText.value!==''){
                if(optionArr.length>1){
                    if(corrAnswer !==undefined){
                    
                          getQuestionStor.push(newQuestion);
                          questionStorage.setQuestionCollection(getQuestionStor);

                        //****************after insert, clear the field************
                        document.getElementById('new-question-text').value='';

                        var uncheck = function(){
                            for(var x=0; x<document.getElementsByName('answer').length;x++){
                            document.getElementsByName('answer')[x].checked=false;
                            document.getElementsByName('answer')[x].nextElementSibling.value=''
                            }}();

            return true;
         //console.log(questionId);       
            //console.log(getQuestionStor)
                    }else {alert('you missed selecting the correct answer, or you selected an answer without value');
                          return false;}
                } else{alert('Please insert at least two options');
                      return false;}
        }else{alert('Please insert question');
             return false;}
            },
        saveQuestionOnLocalStorage: function(newQuestionText,opts,sequence){
            
            var optionArr, corrAnswer, questionId, newQuestionEdit, getQuestionStor;
            //getQuestionStor=[];
            
            optionArr=[];
            //questionStorage.setQuestionCollection ([]);????? length for id issue
            //*****************************options********************
            for (var i = 0; i < opts.length; i++){
                if(opts[i].value !=='') {
                    optionArr.push(opts[i].value);
                    /*???????????????
                    document.getElementsByName('answer')[document.getElementsByName('answer').length-1].addEventListener('focus', function(){
                        newDiv=document.createElement('div')
                     document.getElementsByName('answer')[document.getElementsByName('answer').length-1].parentElement.appendChild(newDiv)
                        console.log(newDiv)
                    })
                    */
                }
                if(opts[i].previousElementSibling.checked && opts[i].value !==""){
                    corrAnswer = opts[i].value}
            }
            //console.log(typeof corrAnswer)
          //*****************************iD*********************
            if(questionStorage.getQuestionCollection()===null){
                questionStorage.setQuestionCollection([]);
            } 
            questionId = sequence;
            
           /* if (questionStorage.getQuestionCollection().length > 0){
                questionId=questionStorage.getQuestionCollection()[questionStorage.getQuestionCollection().length - 1].id + 1;
            } else { 
                questionId = 0;  
            }*/
            //*****************************localStorage*********************
            newQuestionEdit = new Question(questionId, newQuestionText.value, optionArr, corrAnswer);
            getQuestionStor = questionStorage.getQuestionCollection();
             
            /*var total='';
            optionArr.forEach(sum);
            
             function sum(text){
                return total +=text;
            }
            console.log(typeof optionArr[0]);
            console.log(total);
            if(newQuestionText.value!=='' && total !==''){
               };*/
            //***********give alerts*************
            if(newQuestionText.value!==''){
                if(optionArr.length>1){
                    if(corrAnswer !==undefined){
                    //console.log(sequence)
                        //console.log(newQuestionEdit);
                          getQuestionStor.splice(sequence,1,newQuestionEdit);
                        //questionId update
                        
                          questionStorage.setQuestionCollection(getQuestionStor);

                        //****************after insert, clear the field************
                        document.getElementById('new-question-text').value='';

                        var uncheck = function(){
                            for(var x=0; x<document.getElementsByName('answer').length;x++){
                            document.getElementsByName('answer')[x].checked=false;
                            document.getElementsByName('answer')[x].nextElementSibling.value=''
                            }}();

            return true;
         //console.log(questionId);       
            //console.log(getQuestionStor)
                    }else {alert('you missed selecting the correct answer, or you selected an answer without value');
                          return false;}
                } else{alert('Please insert at least two options');
                      return false;}
        }else{alert('Please insert question');
             return false;}
            },
        deleteQuestionOnLocalStorage: function(){
            var arrQuestionEdit=[];
            arrQuestionEdit=questionStorage.getQuestionCollection();
            /*for (var p=0;p<=arrQuestionEdit.length-sequence; p++){
                arrQuestionEdit[sequence+1+p].id=sequence+p;
            };*/
            arrQuestionEdit.splice(sequence,1);
            for (var p=0; p<arrQuestionEdit.length; p++){
                //console.log(arrQuestionEdit[p]);
                arrQuestionEdit[p].id=p;
                //console.log(arrQuestionEdit[p].id)
            };
            questionStorage.setQuestionCollection(arrQuestionEdit);
            //console.log(questionStorage.getQuestionCollection());
            UIController.addQuestionList(quizController.getQuestionLocalStorage);
        },
        /*quizDisplay: function(questionStore, q){
            //console.log(questionStore);
            var newQuiz, lenQuiz, quizOpts,quizQuestText,lenQuestOpts, Apharr,quizOpt,
                //quizOpt=[];
                Apharr=["A","B","C","D","E","F","G"];
            document.getElementById('asked-question-text').textContent='';
            document.querySelector('.quiz-options-wrapper').innerHTML='';
                lenQuiz=questionStore.length
            //document.querySelector('.quiz-container').innerHTML='';
           //for (var q=0; q<lenQuiz; q++) {
                //var q=0
                quizQuestText=questionStore[q].questionText;
                lenQuestOpts=questionStore[q].opts.length;
                quizOpts='';
            
                for (var r=0; r < lenQuestOpts; r++){
                   
                    quizOpt='<div class="choice-'+r+'"><span class="choice-'+r+'">'+Apharr[r]+'</span><p  class="choice-'+r+'">'+questionStore[q].opts[r]+'</p></div>'
                    quizOpts += quizOpt;
                }
                
                newQuiz='<div class="quiz-wrapper"><h2 id="asked-question-text">'+quizQuestText+'</h2><div class="instant-answer-container"><img id="emotion" src="images/happy.png"><div id="instant-answer-wrapper"><p id="instant-answer-text">This is a correct answer</p><button id="next-question-btn">Next</button></div></div><div class="quiz-options-wrapper">'+quizOpts+'</div></div>'
                
                //quizOpts='<div class="choice-0"><span class="choice-0">A</span><p  class="choice-0">test1</p></div>'
                //console.log(newQuiz)
           
            document.querySelector('.quiz-container').insertAdjacentHTML('beforeend',newQuiz);
            document.getElementById('next-question-btn').style.visibility='visible';
                
            //}
        }*/
        quizDisplay: function(questionStore, q){
            //console.log(questionStore);
            var lenQuiz, lenQuestOpts, Apharr,quizOpt,
                //quizOpt=[];
                Apharr=["A","B","C","D","E","F","G"];
            document.getElementById('asked-question-text').textContent='';
            document.querySelector('.quiz-options-wrapper').innerHTML='';
                if(questionStore[q]!==undefined){
            lenQuiz=questionStore.length
            //document.querySelector('.quiz-container').innerHTML='';
           //for (var q=0; q<lenQuiz; q++) {
                //var q=0
                document.getElementById('asked-question-text').textContent=questionStore[q].questionText;
                lenQuestOpts=questionStore[q].opts.length;
                quizOpts='';
            
                for (var r=0; r < lenQuestOpts; r++){
                   
                    quizOpt='<div class="choice-'+r+'"><span class="choice-'+r+'">'+Apharr[r]+'</span><p  class="choice-'+r+'">'+questionStore[q].opts[r]+'</p></div>'
                    document.querySelector('.quiz-options-wrapper').insertAdjacentHTML('beforeend',quizOpt);
                };
               
              document.querySelector('.instant-answer-container').style.visibility='visible';
            //console.log(document.querySelector('.instant-answer-container').style)
            document.getElementById('next-question-btn').style.display='';
                
                //quizOpts='<div class="choice-0"><span class="choice-0">A</span><p  class="choice-0">test1</p></div>'
                //console.log(newQuiz)
            document.getElementById('progress').textContent=(q+1)+'/'+lenQuiz;
            document.getElementById('progress').nextElementSibling.value=q+1;
            document.getElementById('progress').nextElementSibling.max=lenQuiz;
                }
                
            //}
        },
        addPersonLocalStorage: function (){
            var newPerson, personId, getPersonStor; 
            if (personStorage.getPersonStorage().length > 0){
                personId=personStorage.getPersonStorage()[personStorage.getPersonStorage().length - 1].id + 1;
            } else { 
                personId = 0;  
            }
            //*****************************localStorage*********************
            newPerson = new Person(personId, currentPerson.fullName[0], currentPerson.fullName[1], currentPerson.score);
            getPersonStor = personStorage.getPersonStorage();
            getPersonStor.push(newPerson);
            personStorage.setPersonStorage(getPersonStor);
            //console.log(newPerson);
            
        },
        getCurrentPerson:currentPerson,
        getAdmin:admin,
        getPersonStorage:personStorage,
        deleteResultOnLocalStorage: function(selectedResultId){
           //console.log(selectedResult);
            var arrResultEdit=[];
            arrResultEdit=personStorage.getPersonStorage();
            
            arrResultEdit.splice(selectedResultId,1);
            for (var t=0; t<arrResultEdit.length; t++){
                //console.log(arrQuestionEdit[p]);
                arrResultEdit[t].id=t;
                //console.log(arrQuestionEdit[p].id)
            };
            personStorage.setPersonStorage(arrResultEdit);
            //console.log(questionStorage.getQuestionCollection());
            UIController.resultList(quizController.getPersonStorage.getPersonStorage());
        }
      }
})();

/**********************************
************UI Controller********
**********************************/

var UIController = (function(){
    
    var domItems={
        questionInsertBtn:document.getElementById('question-insert-btn'),
        newQuestionText:document.getElementById('new-question-text'),
        adminOpts:document.querySelectorAll('.admin-option'),
        adminOptionContainer:document.querySelector('.admin-options-container'),
        insertQuestWrap:document.querySelector('.inserted-questions-wrapper'),
        questionsClearBtn:document.getElementById('questions-clear-btn'),
        questionUpdateBtn:document.getElementById('question-update-btn'),
        questionDeleteBtn:document.getElementById('question-delete-btn'),
        questionNextBtn:document.getElementById('next-question-btn'),
        quizOptionWrapper:document.querySelector('.quiz-options-wrapper'),
        instantAnsContainer:document.querySelector('.instant-answer-container'),
        instantAnsText:document.getElementById("instant-answer-text"),
        instantAnsWrapper:document.getElementById("instant-answer-wrapper"),
        instantAnsImage:document.getElementById('emotion'),
        quizStartBtn:document.getElementById('start-quiz-btn'),
        ///////***********landing page*********************
        personFirstName:document.getElementById('firstname'),
        personLastName:document.getElementById('lastname'),
        clearResultsBtn:document.getElementById('results-clear-btn')
    }
    return {
        getDomItems: domItems,
        
        addInputDynamiclly: function(){
            
            var addInput= function (){
            
               var newOption, z
            
            z=document.querySelectorAll('.admin-option').length
            newOption='<div class="admin-option-wrapper"><input type="radio" class="admin-option-'+ z +'" name="answer" value="1"><input type="text" class="admin-option admin-option-'+ z +'" value=""></div>'
            domItems.adminOptionContainer.insertAdjacentHTML('beforeend',newOption)
            domItems.adminOptionContainer.lastElementChild.previousElementSibling.lastElementChild.removeEventListener('focus',addInput)    
            domItems.adminOptionContainer.lastElementChild.lastElementChild.addEventListener('focus',addInput)
            //console.log(domItems.adminOptionContainer.lastElementChild.lastElementChild)
                //var adminOptions =document.querySelectorAll('.admin-option')
                //console.log(adminOptions)
            }
             //console.log(domItems.adminOptionContainer.lastElementChild.lastElementChild)
        domItems.adminOptionContainer.lastElementChild.lastElementChild.addEventListener('focus',addInput) 
            
        },
        addQuestionList: function(getQuestions){
            
         var questionHtml,numberArr;
            numberArr=[];
            domItems.insertQuestWrap.innerHTML="";
            //console.log(getQuestions.getQuestionCollection());
            //console.log(domItems.insertQuestWrap);
            //console.log(getQuestions.getQuestionCollection().length);
            for(var y = 0; y < getQuestions.getQuestionCollection().length; y ++){
                numberArr.push(y+1)
              questionHtml = '<p><span>'+numberArr[y]+'. '+getQuestions.getQuestionCollection()[y].questionText+'</span><button id="question-' +getQuestions.getQuestionCollection()[y].id+ '">Edit</button></p>'
            domItems.insertQuestWrap.insertAdjacentHTML('afterbegin',questionHtml)  
            }
            
            /*var question='<p><span>1. Question Text</span><button id="question-1">Edit</button></p>'
            domItems.insertQuestWrap.insertAdjacentHTML('beforebegin',question)*/
        },
        getQuestionEdit: function(event,storage){
            if(event.target.id.indexOf('question-')>=0){
                //console.log(event.target.id.indexOf('question-'));
                document.getElementById('question-update-btn').style.visibility='visible';
                document.getElementById('question-delete-btn').style.visibility='visible';
                domItems.questionInsertBtn.style.visibility='hidden';
                document.getElementById('questions-clear-btn').style.pointerEvents='none';
                UIController.getDomItems.adminOptionContainer.innerHTML='';
                //console.log(storage.getQuestionCollection());
                //console.log(parseInt(event.target.id.match(/\d+/)));
                document.getElementById('new-question-text').value = storage.getQuestionCollection()[parseInt(event.target.id.match(/\d+/))].questionText;
            
            var opt=[];
                opt=storage.getQuestionCollection()[parseInt(event.target.id.match(/\d+/))].opts;
               // console.log(opt,storage.getQuestionCollection()[event.target.id.match(/\d+/)].questionText,document.getElementById('new-question-text'));
            
            for (var o=0; o<opt.length; o++){
                
                var reload='<div class="admin-option-wrapper"><input type="radio" class="admin-option-'+ o +'" name="answer" value="1"><input type="text" class="admin-option admin-option-'+ o +'" value="'+ opt[o] +'"></div>';
                document.querySelector('.admin-options-container').insertAdjacentHTML('beforeend',reload);
                if (document.querySelectorAll('.admin-option')[o].value===storage.getQuestionCollection()[parseInt(event.target.id.match(/\d+/))].correctAnswer)
                {document.querySelectorAll('.admin-option')[o].previousElementSibling.checked=true}
            /*if(document.querySelector('.admin-option admin-option-').value.indexOf(storage.getQuestionCollection()[event.target.id.match(/\d+/)].correctAnswer)>=0){console.log(o)};*/
            };
                domItems.adminOptionContainer.lastElementChild.lastElementChild.addEventListener('focus', UIController.addInputDynamiclly()); 
            };
          //update question in editting
            return sequence = parseInt(event.target.id.split('-')[1]);
            
        },
        
        //delete question in editting
        clearQuestionList: function(){
            if(quizController.getQuestionLocalStorage.getQuestionCollection().length>0) {
            var con=confirm('Warning! You are about to clear the entire question list.')
            if(con){quizController.getQuestionLocalStorage.removeQuestionCollection();
            UIController.getDomItems.insertQuestWrap.innerHTML="";
                      if(quizController.getQuestionLocalStorage.getQuestionCollection()===null){
                quizController.getQuestionLocalStorage.setQuestionCollection([]);
            }
                   }
            }
            
            
        },
        
        deleteQuestionFromList: function(){
            
            quizController.deleteQuestionOnLocalStorage();
             document.getElementById('new-question-text').value='';
             var uncheck = function(){ for(var x=0; x<document.getElementsByName('answer').length;x++){
                            document.getElementsByName('answer')[x].checked=false;
                            document.getElementsByName('answer')[x].nextElementSibling.value=''
                            }}();
                document.getElementById('question-update-btn').style.visibility='hidden';
                document.getElementById('question-delete-btn').style.visibility='hidden';
                domItems.questionInsertBtn.style.visibility='visible';
                document.getElementById('questions-clear-btn').style.pointerEvents='';
        },
        /*nextQuestion:function(){
          
            var questionIndex;
            
            quizController.quizDisplay(quizController.getQuestionLocalStorage.getQuestionCollection(), 1);
            
           //console.log('questionIndex')
           
        },*/
        isFinish:function(){
            domItems.questionNextBtn.textContent='Finish';
            //quizController.addPersonLocalStorage();
            //console.log(quizController.getCurrentPerson.score);
        },
        checkCorrAnswer:function(questionStorage,selectedAnswer,index){
        if (index+1===questionStorage.getQuestionCollection().length){
            UIController.isFinish();
            //quizController.addPersonLocalStorage();?????????????
        };
            /*var scoreCount
            scoreCount=0;*/
               if(questionStorage.getQuestionCollection()[index].correctAnswer==selectedAnswer){ 
                   //quizController.getCurrentPerson.score ++;
                   //console.log(quizController.getCurrentPerson.score);
                   return true;
               } else{
                   return false;
               };
           
        },
        getScore:function(questionStorage,selectedAnswer,index){
            if (!(index===questionStorage.getQuestionCollection().length)){
            if(questionStorage.getQuestionCollection()[index].correctAnswer==selectedAnswer){ 
                   quizController.getCurrentPerson.score ++;
            };
        };
            
            //console.log(quizController.addPersonLocalStorage());
        },
        showInstantAnswer:function(result, choice){
            var Instant={
                text:['This is the correct answer','This is a wrong answer'],
                instantAnsClass:['green','red'],
                emotionType:["images/happy.png","images/sad.png"],
                optSpanBg:['rgba(0, 250, 0, .2)','rgba(200, 0, 0, .7)']
                };
            domItems.instantAnsContainer.style.opacity='1';
            //domItems.instantWrapper.style.visibility='visible';
            domItems.quizOptionWrapper.style.cssText='opacity:0.6; pointer-events:none;';
            
            if(result==true){
                domItems.instantAnsText.textContent=Instant.text[0];
                domItems.instantAnsWrapper.className=Instant.instantAnsClass[0];
                domItems.instantAnsImage.setAttribute('src', Instant.emotionType[0]);
                choice.previousElementSibling.style.backgroundColor=Instant.optSpanBg[0];
                
            } else{
                domItems.instantAnsText.textContent=Instant.text[1];
                domItems.instantAnsWrapper.className=Instant.instantAnsClass[1];
                domItems.instantAnsImage.setAttribute('src', Instant.emotionType[1]);
                choice.previousElementSibling.style.backgroundColor=Instant.optSpanBg[1];
            }
                

        },
        getPersonFullName: function(currentPersonData, questionStorage, admin){
            //console.log(currentPersonData.fullName[0],currentPersonData.fullName[1],admin)
          if(currentPersonData.fullName[0] !=="" && currentPersonData.fullName[1] !==""){
            if(currentPersonData.fullName[0]===admin.firstName && currentPersonData.fullName[1]===admin.lastName){
               document.querySelector('.landing-page-container').style.display='none';
              document.querySelector('.admin-panel-container').style.display='block';
               document.querySelector('.quiz-container').style.display='block';
              } else{
                  if(questionStorage.getQuestionCollection().length>0){
                      document.querySelector('.landing-page-container').style.display='none';
                  document.querySelector('.quiz-container').style.display='block';
              }else{
                  alert('Quiz is not ready.')
              }
                  
              }
            }else{
        alert('Please fill in your first name and last name.')
    }
        },
        resultList: function(userData){
            //console.log(userData);
            var resultHtml
            document.querySelector('.results-list-wrapper').innerHTML='';
           for (var s=0;s<userData.length;s++){
              resultHtml='<p class="person person-'+s+'"><span class="person-'+s+'">'+userData[s].firstName+' '+userData[s].lastName+' - '+userData[s].score+' Points</span><button id="delete-result-btn_'+s+'" class="delete-result-btn">Delete</button></p>';
            document.querySelector('.results-list-wrapper').insertAdjacentHTML('beforeend',resultHtml);
            }
        }
    }
    
})();

/**********************************
************Controller********
**********************************/

var Controller = (function(quizCtrl, UICtrl){
    
    var selectedDomItems= UICtrl.getDomItems;
    var index=0;
    
    UICtrl.addInputDynamiclly();
    UICtrl.addQuestionList(quizCtrl.getQuestionLocalStorage);
    
    selectedDomItems.questionInsertBtn.addEventListener('click',function(){
        var adminOpts =document.querySelectorAll('.admin-option');
        //quizCtrl.addQuestionOnLocalStorage(selectedDomItems.newQuestionText, adminOpts);
        
        var checkboolean=quizCtrl.addQuestionOnLocalStorage(selectedDomItems.newQuestionText, adminOpts);
        if (checkboolean){UICtrl.addQuestionList(quizCtrl.getQuestionLocalStorage)};
        //quizCtrl.quizDisplay(quizCtrl.getQuestionLocalStorage.getQuestionCollection(), 0);
    });
     selectedDomItems.insertQuestWrap.addEventListener('click',function(e){
         UICtrl.getQuestionEdit(e, quizCtrl.getQuestionLocalStorage);
         //console.log(sequence)
     });
    //console.log(selectedDomItems.questionsClearBtn)
    selectedDomItems.questionsClearBtn.addEventListener('click', function(){
        UICtrl.clearQuestionList();
    });
    
    selectedDomItems.questionUpdateBtn.addEventListener('click',function(){
        var adminOpts =document.querySelectorAll('.admin-option');
        //quizCtrl.addQuestionOnLocalStorage(selectedDomItems.newQuestionText, adminOpts);
        
        var checkboolean=quizCtrl.saveQuestionOnLocalStorage(selectedDomItems.newQuestionText, adminOpts, sequence);
        if (checkboolean){UICtrl.addQuestionList(quizCtrl.getQuestionLocalStorage)};
                document.getElementById('question-update-btn').style.visibility='hidden';
                document.getElementById('question-delete-btn').style.visibility='hidden';
                selectedDomItems.questionInsertBtn.style.visibility='visible';
                document.getElementById('questions-clear-btn').style.pointerEvents='';
        
        //delete original question
    });
    
    selectedDomItems.questionDeleteBtn.addEventListener('click',function(){
        UICtrl.deleteQuestionFromList()
    });
        //delete original question
    quizCtrl.quizDisplay(quizCtrl.getQuestionLocalStorage.getQuestionCollection(), 0);
    //advance to next question
    selectedDomItems.questionNextBtn.addEventListener('click', function(){
        if(index<quizCtrl.getQuestionLocalStorage.getQuestionCollection().length-1){
        index++;
        quizCtrl.quizDisplay(quizCtrl.getQuestionLocalStorage.getQuestionCollection(), index);
            UICtrl.getDomItems.quizOptionWrapper.style.cssText='opacity:1; pointer-events:auto;'
            UICtrl.getDomItems.instantAnsContainer.style.opacity='0';
        }else{quizCtrl.quizDisplay(quizCtrl.getQuestionLocalStorage.getQuestionCollection(), quizCtrl.getQuestionLocalStorage.getQuestionCollection().length-1);
              document.querySelector('.quiz-container').style.display='none';
              document.querySelector('.final-result-container').style.display='block';
              document.getElementById('final-score-text').textContent=quizCtrl.getCurrentPerson.fullName[0]+"  "+quizCtrl.getCurrentPerson.fullName[1]+"  "+"  "+"score"+"  "+quizCtrl.getCurrentPerson.score+"  "+"of"+"  "+quizCtrl.getQuestionLocalStorage.getQuestionCollection().length;
        }
        //UICtrl.nextQuestion()
    });
    document.getElementById('final-logout-btn').addEventListener('click', function(){
        //document.querySelector('.final-result-container').style.display='none';
        //document.querySelector('.landing-page-container').style.display='block';
        //selectedDomItems.personFirstName.value='';
        //selectedDomItems.personLastName.value='';
        quizCtrl.addPersonLocalStorage();
    });
    document.querySelector('.quiz-options-wrapper').addEventListener('click', function(){
        //console.log(index);
        var selectedAnswer, choice
        if (event.target.className.indexOf('choice-')>=0){
          selectedAnswer=event.target.lastElementChild.textContent;
            choice=event.target.lastElementChild;
        UICtrl.checkCorrAnswer(quizCtrl.getQuestionLocalStorage,selectedAnswer,index);
        var bo=UICtrl.checkCorrAnswer(quizCtrl.getQuestionLocalStorage,selectedAnswer,index);
        UICtrl.showInstantAnswer(bo, choice);
        UICtrl.getScore(quizCtrl.getQuestionLocalStorage,selectedAnswer,index);
            //console.log(quizCtrl.getCurrentPerson.score)
             };
    });
    //quizCtrl.addPersonLocalStorage();
    selectedDomItems.quizStartBtn.addEventListener('click', function(){
        quizCtrl.getCurrentPerson.fullName[0]=selectedDomItems.personFirstName.value;
        quizCtrl.getCurrentPerson.fullName[1]=selectedDomItems.personLastName.value;
        //console.log(quizCtrl.getAdmin);
        UICtrl.getPersonFullName(quizCtrl.getCurrentPerson, quizCtrl.getQuestionLocalStorage, quizCtrl.getAdmin);
    });
   selectedDomItems.personLastName.addEventListener('focus', function(){
       selectedDomItems.personLastName.addEventListener('keypress', function(e){
           if(e.keyCode===13){
                quizCtrl.getCurrentPerson.fullName[0]=selectedDomItems.personFirstName.value;
                quizCtrl.getCurrentPerson.fullName[1]=selectedDomItems.personLastName.value;
                //console.log(quizCtrl.getAdmin);
                UICtrl.getPersonFullName(quizCtrl.getCurrentPerson, quizCtrl.getQuestionLocalStorage, quizCtrl.getAdmin);
           }
       })
        
    });
    UICtrl.resultList(quizCtrl.getPersonStorage.getPersonStorage());
    selectedDomItems.clearResultsBtn.addEventListener('click', function(){
        var con1=confirm('Warning! You are about to clear the entire result list.');
        quizCtrl.getPersonStorage.removePersonStorage();
        document.querySelector('.results-list-wrapper').innerHTML='';
        
    });
    document.querySelector('.results-list-wrapper').addEventListener('click', function(e){
        var selectedResultId=parseInt(event.target.id.match(/\d+/))
        if(e.target.className.indexOf('delete-result-btn')>=0){
       quizCtrl.deleteResultOnLocalStorage(selectedResultId);
        }
       
    });
})(quizController, UIController);


     /*???????????????
                    document.getElementsByName('answer')[document.getElementsByName('answer').length-1].addEventListener('focus', function(){
                        newDiv=document.createElement('div')
                     document.getElementsByName('answer')[document.getElementsByName('answer').length-1].parentElement.appendChild(newDiv)
                        console.log(newDiv)
                    })
                    */