$(document).ready(function(){
	var count = 0;
	$("#btn-req").click(function(){
		/*$.get("https://estruturaorganizacional.dados.gov.br/siorg-servicos-webapp/doc/unidade-organizacional/002981",function(data){
				console.log(data);
				console.log("OI");
		},"xml");*/
	 	$.ajax({
	        url: "http://192.168.0.114/resttest/test.php",
	        type: "GET",
	        dataType: "json",
	        success: function(response){
	            //appendTable(response);
	            alert(response.servico.mensagem);
				count++;
				$("#response-table").append("<tr><td>"+count+"</td><td>"+response.servico.codigoErro +"</td><td>"
					+response.servico.ipRequisitante+"</td><td>"+response.servico.mensagem+"</td></tr>");
				$("#response-table").listview("refresh");
	        }
	    });
	});
});