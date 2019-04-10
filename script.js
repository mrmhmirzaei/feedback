let loveIndex = 0;
function SelectEmoji(self, index){
    document.querySelectorAll("div#feedback div.emojis div.emoji").forEach(emoji=>emoji.classList.remove('focus'))
    self.classList.add('focus');
    loveIndex = index;
    document.getElementById('feedback').classList.add('message');
    document.querySelector('div#feedback div.input textarea').focus();
}

function ShowFeedBack(){
    loveIndex = 0;
    document.querySelectorAll("div#feedback div.emojis div.emoji").forEach(emoji=>emoji.classList.remove('focus'))
    document.getElementById('feedback').classList.remove('message')
    document.getElementById('feedback').classList.add('enable');
    setTimeout(() => {
        document.getElementById('feedback').classList.add('content');
    }, 300);
}

function HideFeedBack(){
    document.getElementById('feedback').classList.remove('content');
    setTimeout(() => {
        document.getElementById('feedback').classList.add('disable');
        document.getElementById('feedback').classList.remove('enable');
    }, 200);
}

function Send(){
    toast('از نظر شما سپاس گذاریم')
}

function toast(text='', timeout=1000){
    if(document.getElementById('toast')) return false;
    else{
      let div = document.createElement('div');
      div.classList.add('toast');
      div.innerHTML = '<pre>'+text+'</pre>';
      div.id = 'toast';
      document.body.appendChild(div);
      setTimeout(() => {
        document.getElementById('toast').classList.add('show');
      }, 100);
      setTimeout(() => {
        document.getElementById('toast').classList.remove('show');
      }, timeout+400);
      setTimeout(()=>{
        document.body.removeChild(document.getElementById('toast'));
      },timeout+700)
      return true;
    }
  }