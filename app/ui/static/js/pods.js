App.pods = App.pods || {
    data:[],
    error:false,
    errorMessage:'',
    loading:false,
    initiated:false,
    init: function(){
        $('#buttonNewPod').on('click', $.proxy(this.showNewPod, this));
//        $('#btnFieldsEditable').on('click', $.proxy(this.makeFieldsEditable, this));
    },
    setLoading: function(state){
        this.loading=true;
    },
    showNewPod: function() {
        $('#newPodModal').modal("show");
    },
    makeFieldsEditable: function() {
//        var contenteditable = $('.makeEditable');
//        $(this).find(contenteditable).attr('contenteditable', 'true');
        $('.makeEditable').attr('contenteditable', 'true');
        console.log('here');
    }
}