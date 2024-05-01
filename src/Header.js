import {useEffect, useState} from 'react';
<<<<<<< HEAD
import firebase from 'firebase';
import instagram from '../src/instagram-logo.png';
import {auth, storage, db} from './firebase.js';
=======
import instagram from '../src/instagram-logo.png';
import {auth} from './firebase.js';
>>>>>>> a5c7c562d1ed56534f2f302266e493d3f5dfa4d9


function Header(props) {

    const [progress, setProgress] = useState(0);

    const[file, setFile] = useState(null);

    useEffect(() =>{

    }, [])

function abrirModalCriarConta(e) {
    e.preventDefault();
    let modal = document.querySelector('.modalCriarConta');

    modal.style.display = "block";
}

function fecharModalCriarConta(){
    let modal = document.querySelector('.modalCriarConta');

    modal.style.display = "none";
}
    

function CriarConta(e){
    e.preventDefault();

    let email = document.getElementById('email-cadastro').value;
    let username = document.getElementById('username-cadastro').value;
    let senha = document.getElementById('senha-cadastro').value;

    //Criar Conta Firebase
    auth.createUserWithEmailAndPassword(email,senha)
    .then((authUser) => {
        authUser.user.updateProfile({
            displayName: username
        })
        alert("conta criada com sucesso");
        let modal = document.querySelector('.modalCriarConta');

        modal.style.display = "none";
    }).catch((error) => {
        alert(error.message);
    })
    ;
}

function logar(e){
<<<<<<< HEAD
    e.preventDefault();
=======
>>>>>>> a5c7c562d1ed56534f2f302266e493d3f5dfa4d9
    let email = document.getElementById('email-login').value;
    let senha = document.getElementById('senha-login').value;

    auth.signInWithEmailAndPassword(email,senha)
    .then((auth) => {
    
        props.setUser(auth.user.displayName);
    
        alert('Logado com sucesso');
    }).catch((err) =>{
        alert(err.message);
    })
}

function abrirModalUpload(e){
    e.preventDefault();
    let modal = document.querySelector('.modalUpload');

    modal.style.display = "block";
}

function fecharModalUpload(){
    let modal = document.querySelector('.modalUpload');
    modal.style.display = "none";


}

function UploadPost(e) {
    e.preventDefault();
<<<<<<< HEAD
    let tituloPost = document.getElementById('Titulo-upload').value;
    let progressEl = document.getElementById('progress-upload');

    const uploadTask = storage.ref(`images/${file.name}`).put(file);
    uploadTask.on("state_changed", function(snapshot){
        const progress = Math.round(snapshot.bytesTransferred/snapshot.totalBytes) * 100;
        setProgress(progress);
    }, function(error){

    }, function() {
        storage.ref('images').child(file.name).getDownloadURL()
        .then(function(url){
            db.collection('posts').add({
                titulo: tituloPost,
                image: url,
                userName: props.user,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            setProgress(0);
            setFile(null);

            alert("Upload Realizado com sucesso");

            document.getElementById('form-upload').reset();
        })
    })
=======
>>>>>>> a5c7c562d1ed56534f2f302266e493d3f5dfa4d9
    
}
    return (
<div className = "header">

    <div className="modalCriarConta">
        <div className='formCriarConta'>
            <div onClick={()=>fecharModalCriarConta()} className='close-modal-criar'>x</div>
            <h2>Criar Conta</h2>
            <form onSubmit={(e) =>CriarConta(e)}>
                <input id='email-cadastro' type="text" placeholder='Seu e-mail..'/>
                <input id='username-cadastro' type="text" placeholder='Seu Username..'/>
                <input id='senha-cadastro' type="Password" placeholder='Sua Senha..'/>
                <input type="submit" value="Criar conta!"/>



            </form>
        </div>
    </div>

    <div className="modalUpload">
        <div className='formUpload'>
            <div onClick={()=>fecharModalUpload()} className='close-modal-criar'>x</div>
            <h2>Fazer upload</h2>
<<<<<<< HEAD
            <form id='form-upload' onSubmit={(e) =>UploadPost(e)}>
                <progress id='progress-upload' value={progress}></progress>
                <input id='Titulo-upload' type="text" placeholder='Nome da sua foto..'/>
                <input onChange={(e)=>setFile(e.target.files[0])} type='file' name='file'/>
                <input type="submit" value="Postar no Instagram!"/>
=======
            <form onSubmit={(e) =>UploadPost(e)}>
                <progress value={progress}></progress>
                <input id='Titulo-upload' type="text" placeholder='Nome da sua foto..'/>
                <input type='file' name='file'/>
                <input type="submit" value="Criar conta!"/>
>>>>>>> a5c7c562d1ed56534f2f302266e493d3f5dfa4d9
            </form>
        </div>
    </div>

    <div className='center'>
    <div className='header_logo'>
      <a href=""><img src= {instagram}/></a>
    </div>
{

(props.user)?
<div className='header_logadoinfo'><span>Olá, <b>{props.user}</b></span> 
<a onClick={(e) => abrirModalUpload(e)} href='#'>Postar</a>
</div>
:

<div className='header_loginform'>
<form onSubmit={(e) => logar(e)}>
<input id='email-login' type = "text" placeholder='Login...' />
<input id='senha-login' type = "password" placeholder='Senha...' />
<input type = "submit" value = "Logar" name= "acao"  />
</form>
<div className='btn_criarConta'>
<a onClick={(e) => abrirModalCriarConta(e)} href= "#">Criar Conta</a>
</div>
</div>


}


</div>
</div>
    )
}

export default Header;