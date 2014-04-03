TARGET = iso3166.min.js
$(TARGET): data.csv codes.csv data.js functions.js
	python parse.py
	echo ";(function () {" > $(TARGET)
	uglifyjs -c -m --lint data.js functions.js >> $(TARGET)
	echo "})();" >> $(TARGET)
	rm data.js
