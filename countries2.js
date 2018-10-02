//Ничего не изменять!!!

var countries={}; // пустой объект

// добавление информации о стране
function addCountry(countryName, capitalName) {
	countries[countryName]=capitalName;
}

// удаление страны по ее названию
function deleteCountry(countryName) {
	delete countries[countryName];
}

// получение информации о стране и возвращение строки с этой информацией или ошибкой
function getCountryInfo(сountryName) {
	if ( сountryName in countries ) {
		return ('страна: ' + сountryName + ' столица: ' + countries[сountryName]);
	}
	else {
		return ('нет информации о стране ' + сountryName + '!');
	}
}

// вывод объекта в строку, с переносами
function listCountries() {
	var result="";

	for ( var key in countries ) {
		result+='\n'+getCountryInfo(key);
	}

	return result;
}

