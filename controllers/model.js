
// imports
const { request, response } = require( 'express' );
const Model = require( '../models/Model' );


// getModels
const getModels = async( req = request, res = response ) => {

    const models = await Model.find({ user: req.user.id }).lean();
    res.render( 'models', { title: 'Modelos', models } );

};


// getAddModel
const getAddModel = ( req = request, res = response ) => {

    res.render( 'addModel', { title: 'Añadir modelo' } );

};


// postAddModel
const postAddModel = async( req = request, res = response ) => {

    const { name, speed } = req.body;
    const user = req.user.id
    const model = new Model({ name, speed, user });
    await model.save();
    req.flash( 'succes', 'Nuevo modelo a sido añadido' );
    res.redirect( '/models' );

};


// getEditModel
const getEditModel = async( req = request, res = response ) => {

    const model = await Model.findById( req.params.id ).lean();
    if ( model.user != req.user.id ) {
        req.flash( 'errors', 'Esa nota no la puedes editar' );
        res.redirect( '/models' );
        return;
    };
    res.render( 'editModel', { title: 'Editar modelo', model } );

};


// putEditModel
const putEditModel = async( req = request, res = response ) => {

    const { name, speed } = req.body;
    await Model.findByIdAndUpdate( req.params.id, { name, speed } );
    req.flash( 'succes', 'Modelo editado correctamente' );
    res.redirect( '/models' );

};


// deleteDeleteModel
const deleteDeleteModel = async( req = request, res = response ) => {

    const id = req.params.id;
    await Model.findByIdAndDelete( id );
    req.flash( 'succes', 'Modelo borrado exitosamente' );
    res.redirect( '/models' );

};


// exports
module.exports = {
    getModels,
    getAddModel,
    postAddModel,
    getEditModel,
    putEditModel,
    deleteDeleteModel
};