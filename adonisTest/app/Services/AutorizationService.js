const AccesoProhibidoException = use('App/Exceptions/AccesoProhibidoException');
const RecursoNoEncontradoException = use('App/Exceptions/RecursoNoEncontradoException');

class AutorizationService{
    verificarPermiso(recurso, user){
        console.log('Entrando a evaluar la excepción');
         if(!recurso){
             throw new RecursoNoEncontradoException();
         }
         if(recurso.user_id != user.id){
             console.log('Evaluando la excepción');
             throw new AccesoProhibidoException();
             };
        }
    }

module.exports = new AutorizationService();