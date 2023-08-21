let text = 'Produtos de ';
for (let tabela = 1; tabela <= 10; tabela++) {
    if (tabela === 1) {
        document.write('<table border="1" class="multiplication-table">');
    } else {
        document.write('<table border="1" class="multiplication-table">');
    }
    document.write("<thead><tr><td colspan='3'>" + text + tabela + "</td></tr></thead>");
    
    for (let linha = 1; linha <= 10; linha++) {
        document.write("<tr><td>"+tabela+"x"+linha+"</td><td>"+linha*tabela+"</td></tr>");
    }
    document.write("</table>");
}
