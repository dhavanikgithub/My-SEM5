const book = [
    {
        book_title : "Harry Potter and the Sorcerer's Stone",
        author : "J.K. Rowling",
        publish_year : 1997
    },
    {
        book_title : "book2",
        author : "author2",
        publish_year : 2000
    },
    {
        book_title : "book3",
        author : "author3",
        publish_year : 2003
    }
]
function print_info(book1)
{
    book1.forEach(element =>
    {
        console.log(element)
    });
}
var b = new print_info(book)