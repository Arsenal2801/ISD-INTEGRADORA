
// imports
const { Router } = require( 'express' );
const { getModels,
        getAddModel,
        postAddModel,
        deleteDeleteModel,
        getEditModel,
        putEditModel } = require( '../controllers/model' );
const auth = require( '../helpers/auth' );


// router
const router = Router();


// getModels
router.get( '/models', auth, getModels );


// getAddModel
router.get( '/addModel', auth, getAddModel );


// postAddModel
router.post( '/addModel', auth, postAddModel );


// getEditModel
router.get( '/editModel/:id', auth, getEditModel );


// putEditModel
router.put( '/editModel/:id', auth, putEditModel );


// deleteDeleteModel
router.delete( '/deleteModel/:id', auth, deleteDeleteModel );


// exports
module.exports = router;