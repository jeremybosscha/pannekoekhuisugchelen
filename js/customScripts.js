document.onL
function edit(elem){
    var element = $(elem), action = element.attr("action"), id = element.attr("id");
    if(!action || action === "edit"){
        element.attr("action", "save");
        element.text("Opslaan");
        setEditorConfig();
        createEditor(id);

        element.focus();
    } else if (action === "save"){
        element.attr("action", "edit");
        element.text("Bewerken");
        InlineEditor.destroy('#editor_' + id);
    }
}

function setEditorConfig(){
    InlineEditor.editorConfig = function( config ) {
        config.language = 'fr';
        config.uiColor = '#AADC6E';
    };
}

function createEditor(id){
    InlineEditor
        .create( document.querySelector( '#editor_' + id ) )
        .catch( error => {
            console.error( error );
        } );
}