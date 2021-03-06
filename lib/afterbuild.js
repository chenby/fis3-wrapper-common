var fs = require( 'fs' );
var path = require( 'path' );
var utils = require( './utils' );

/**
 * build之后【可能的话，恢复初态】：1，删除软链；2，删除.gitignore
 * @param dependencies
 * @param env
 */
module.exports = function ( dependencies, env ) {

    var cwd = env.cwd;

    try {
        fs.unlinkSync( path.join( cwd, utils.mark.watching ) );
    } catch ( e ) {
        // console.error( e );
    }

    if ( !dependencies )
        return;

    if ( !dependencies.length )
        return;

    var cwd = env.cwd;

    typeof dependencies == 'string' && ( dependencies = [ dependencies ] );

    require( './cleaner' )( dependencies, env );

}