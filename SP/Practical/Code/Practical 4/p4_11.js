const url_value=new URL("https://www.google.com/search?sxsrf=ALeKk00zkMmOlhl2IKbhPhHy_gY57KJN_g%3A1598340885542&source=hp");
console.log(url_value.search.split('?')[1]);