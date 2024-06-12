'use strict'
/* let username = document.querySelector('.username')
let btn = document.querySelector('.btn');
let del_all_btn = document.querySelector('.del');
let input = document.querySelector('input');

btn.addEventListener('click', ()=>{
  let value = input.value;
  var div = document.createElement('div')
  let h1 = document.createElement('h1')
  let icon_div = document.createElement('div')
  let edit_icon = document.createElement('img')
  let del_icon = document.createElement('img')
  div.classList = 'name'
  icon_div.classList='icon_div'
  edit_icon.src='https://www.freeiconspng.com/thumbs/edit-icon-png/edit-editor-pen-pencil-write-icon--4.png'
  del_icon.src='https://cdn-icons-png.flaticon.com/512/1345/1345874.png'
  icon_div.append(edit_icon)
  icon_div.append(del_icon)
  div.append(h1)
  div.append(icon_div)
  h1.textContent=value
  username.append(div)
  if(input.value.length > 0){
    input.value = ''
  }
  del_all_btn.addEventListener('click',()=>{
    div.remove()
  })
  del_icon.addEventListener('click',()=>{
    div.remove()
  })
  edit_icon.addEventListener('click',()=>{
   var edit =  input.value = h1.textContent
   btn.addEventListener('click', ()=>{
     h1.textContent= edit
   })
  })
});
*/


let username = document.querySelector('.con');
let btn = document.querySelector('.btn');
let del_all_btn = document.querySelector('.del');
let input = document.querySelector('input');


btn.addEventListener('click', () => {
    let value = input.value
    if (value === '') {
        return;
    }
    let div = document.createElement('div');
    let li = document.createElement('li');
    let h1 = document.createElement('h1');
    let icon_div = document.createElement('div');
    let edit_icon = document.createElement('img');
    let del_icon = document.createElement('img');
    div.classList='name'
    icon_div.classList='icon_div'
    edit_icon.src = 'https://www.freeiconspng.com/thumbs/edit-icon-png/edit-editor-pen-pencil-write-icon--4.png';
    del_icon.src = 'https://cdn-icons-png.flaticon.com/512/1345/1345874.png';
    icon_div.appendChild(edit_icon);
    icon_div.appendChild(del_icon);
    div.appendChild(h1);
    div.appendChild(icon_div);
    h1.textContent = value;
    li.appendChild(div)
    username.appendChild(li);
    input.value = '';
    del_icon.addEventListener('click', () => {
        div.remove();
    });
    edit_icon.addEventListener('click', () => {
        let edit = prompt('edit name',h1.textContent);
        if (edit !== '') {
            h1.textContent = edit;
        }
    });
});
del_all_btn.addEventListener('click', () => {
    username.remove()
});
