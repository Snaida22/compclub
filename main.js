var submit = document.getElementById('quiz-app')
var correct = document.getElementById('correct')
var wrong = document.querySelectorAll("#p1")


submit.addEventListener('submit', function result(e){
      e.preventDefault()
      var marks = 0;
      var q1 = document.quiz.question1.value;
      var q2 = document.quiz.question2.value;
      var q3 = document.quiz.question3.value;
      var q4 = document.quiz.question4.value;
      var q5 = document.quiz.question5.value;
      var q6 = document.quiz.question6.value;
  
      if(q1 == 'Javascript') marks++
      if(q2 == 'que2') marks++
      if(q3 == 'que3') marks++
      if(q4 == 'que4') marks++
      if(q5 == 'que5') marks++
      if(q6 == 'que6') marks++

  
   var result = Math.floor( marks * 100 /(6)) + '%'

   if(result >= 80 + '%' || result ==100 + '%'){
     submit.innerHTML = 'You Scored' +' '+ result + 'Excellent!!'
   }
   else if(result >=50 + '%'){
     submit.innerHTML = 'You Scored' + ' ' + result + ' ' + 'Fairly Passed'
   }
   else if(result >0 +'%' || result<=49 + '%'){
    submit.innerHTML = 'You Scored' + ' ' + result + ' ' + 'Scored Poorly. Try Again'

   }
  submit.classList.add('big')
  
})