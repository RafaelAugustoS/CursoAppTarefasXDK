$(function(){
    var url = 'http://localhost/app/';
    var acesso = localStorage.getItem('id');
    
   
    // Listar Tarefas
    function ListarTarefas(){
        $.ajax({
           method: 'GET',
            url: url+'listar_tarefas.php',
            dataType: 'html',
            data: 'acao=listar&id='+acesso,
            beforeSend: function(){
                $('.tarefas').html('Carregando');
            },
            success: function(data){
                $('.tarefas').html(data);
            }
        });
    }
    ListarTarefas();
    
    
    // Logar
    
    if(acesso == null){
        $('form[name=form-login]').submit(function(){
            $.ajax({
                method: 'POST',
                url: url+'login.php',
                dataType: 'json',
                data: $('form[name=form-login]').serialize(),
                beforeSend: function(){
                    $('.btn-logar').text('Carregando...');
                },
                success: function(data){
                    localStorage.setItem('id',data.id);
                    localStorage.setItem('nome',data.nome);
                    localStorage.setItem('email',data.email);
                    var verificaLogin = localStorage.getItem('id');
                    acesso = verificaLogin;
                    if(acesso == verificaLogin){
                        activate_page("#dashboard");
                    }
                }
            });

           return false; 
        });
    }else{
        activate_page("#dashboard");
    }
    
    
    
    
});