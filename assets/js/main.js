let app = (function(){
    
    const render = () =>{
        
        let btn = document.getElementById('push');
        
        btn.addEventListener('click',()=>{
            let title = document.getElementById('titleMsg').value;
            let msg = document.getElementById('bigMsg').value;
            push.render(title,msg)
        })
    }

    return{
        render:render
    }

})();

document.addEventListener('DOMContentLoaded',()=>{
    app.render()
});