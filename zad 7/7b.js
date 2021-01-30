function createParagraph(){

  const input = document.querySelector('.input');

    if(input.value!=''){
    const paragraph = document.createElement('p');
          paragraph.innerHTML=input.value;
          document.body.appendChild(paragraph);
          input.value='';
        }

    }
