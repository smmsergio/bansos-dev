
$(function() {
    
    $('#ff').form({  
        success:function(data){  
            $.messager.alert('Info', data, 'info', function(r){
                location.href='monev_bansos.php';
            });
        }  
    });
    
    $( "#mon_tgl" ).datepicker({
        dateFormat: 'dd/mm/yy'
    });
	
    
});
 