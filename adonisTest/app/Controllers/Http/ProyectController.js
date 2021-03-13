'use strict'

const Proyect = use('App/Models/Proyect');
const AutorizationService = use('App/Services/AutorizationService');
class ProyectController {
    async index({ auth }){
        const user = await auth.getUser();
        //console.log(user);
        //return{
        //    mensaje: "Hola estamos en index de proyectos :D" 
        //}
        return await user.proyects().fetch();
    }

    async create({ auth, request }){
        const user = await auth.getUser();
        const username = user.username;
        const {name} = request.all();
        //const name = user.username+'asdf';
        const proyect = new Proyect();
        
        proyect.fill({
           name,
           username
        });
        console.log(name,proyect.name);

        await user.proyects().save(proyect);
        return proyect;
    }

    async destroy({auth, request, params }){
        const user = await auth.getUser();
        const {id} = params;
        const proyect = await Proyect.find(id);
        AutorizationService.verificarPermiso(proyect, user);        //Lo siguiente es para darle permisos a el usuario
        //asociado a este proyecto de borrado
        // if(proyect.user_id != user.id){
        //      return Response.status(403).json({
        //          mensaje: "Solo se pueden eliminar proyectos propios"
        //      })
        // }
        await proyect.delete();
        return proyect;

    }

    async update ({auth, request, params}){
        const user = await auth.getUser();
        const {id} = params;
        //const {name} = request.all();
        //const titulo = request.titulo   
        const proyect = await Proyect.find(id);
        AutorizationService.verificarPermiso(proyect, user); 
        proyect.merge(request.only('name'));
        await proyect.save();
        return proyect;
    }
    
}

module.exports = ProyectController

//token de un usuario 
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjExLCJpYXQiOjE2MTU0OTg1OTl9.XaAKBoAwOsWv0sZe8DJqr-PI96HjdCDsIo7Rz2utTMQ"