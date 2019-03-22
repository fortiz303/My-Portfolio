$('#submit').click(function(){

        let question1 = $('#question1').val();
        let question2 = $('#question2').val();

      let answer = question1;
      //script for a lazy developer
      if (answer == 1 | answer == 2){
        answer2 = question2
          if(answer2 < 100){
            $('#results').html('Expect to become proficient at Javascript in 1 year and 1-2 months');
        } else if (answer2 < 200){
            $('#results').html('Expect to become proficient at Javascript in 11 months');
        } else if (answer2 < 300 ){
            $('#results').html('Expect to become proficient at Javascript in 8 months');
        } else if (answer2 < 400 ){
            $('#results').html('Expect to become proficient at Javascript within 4 months');
        } else if (answer2 < 500){
            $('#results').html('Expect to become proficient at Javascript in 1-2 months');
        } else {
          $('#results').html('Expect to become proficient at Javascript in 2-3 weeks');
        }
      };
      //script for a somewhat committed developer
      if (answer == 3 | answer == 4 | answer == 5 ){
        answer3 = question2
          if (answer3 < 100){
            $('#results').html('Expect to become proficient at Javascript in 8 months')
        } else if (answer3 < 200){
            $('#results').html('Expect to become proficient at Javascript in 6 months');
        } else if (answer3 < 300 ){
            $('#results').html('Expect to become proficient at Javascript in 4 months');
        } else if (answer3 < 400 ){
          $('#results').html('Expect to become proficient at Javascript in 2 months');
        } else if (answer3 < 500){
          $('#results').html('Expect to become proficient at Javascript in 1 month');
        } else {
          $('#results').html('Expect to become proficient at Javascript in 2 weeks');
        }
      };
      //script for somebody who is going to pound out code
      if(answer == 6 | answer == 7 | answer == 8 ){
        answer4 = question2
          if(answer4 < 100){
            $('#results').html('Expect to become proficient at Javascript in 5 months');
        } else if (answer4 < 200){
            $('#results').html('Expect to become proficient at Javascript in 3 months');
        } else if (answer4 < 300 ){
            $('#results').html('Expect to become proficient at Javascript in 2 months');
        } else if (answer4 < 400 ){
            $('#results').html('Expect to become proficient at Javascript in 1 month');
        } else if (answer4 < 500){
            $('#results').html('Expect to become proficient at Javascript in 2 weeks');
        } else {
            $('#results').html('Expect to become proficient at Javascript in 1 week')
        }
      };
      if(answer > 8){
        $('#results').html('While we encourage you to study hard, we believe that studying 9 hours or more a day is not sustainable. Cut down your hours and try again. ')
      }


        document.querySelector('#results').innerHTML;
        document.querySelector('.bg-modal').style.display= 'flex';

        document.querySelector('.close').addEventListener('click',function(){
          document.querySelector('.bg-modal').style.display= 'none';
        });

    });
