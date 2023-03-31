pm.test("Проверка, что в ответ пришёл статус 200", function () {
    pm.response.to.have.status(200); 
});

pm.test("Проверка того,что время запроса составило меньше 100ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(100);
});

pm.test("Проверка того, что кодовое имя статуса содержит строку ок", function () {
    pm.response.to.have.status("OK");
});

pm.test("Проверка, что в ответе есть строка fair", function () {
    pm.expect(pm.response.text()).to.include("fair");
});

pm.test("Проверка на name", function () {
pm.globals.get("variable_key");
pm.environment.get("variable_key");
pm.environment.get("variable_key");
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Obi-Wan Kenobi");
});