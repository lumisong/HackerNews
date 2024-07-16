# The full process UNF to 3NF

ID:
NAME:

## Process

**UNF**
> `SHOW_BOOKING (show_date_time, play_number, play_name, play_writer, total_number_of_patrons, theatre_id, theatre_street, theatre_town, (booking_number, number_of_seats, total_amount_due, paid, client_number, client_name))`

**1NF**
> `SHOW (`<u>`show_date_time`</u>`, `<u>`play_number`</u>`, play_name, play_writer, total_number_of_patrons, theatre_id)`
> `THEATRE (`<u>`theatre_id`</u>`, theatre_street, theatre_town)`
> `BOOKING (`<u>`booking_number`</u>`, number_of_seats, total_amount_due, paid, client_number, show_date_time, play_number)`
> `CLIENT (`<u>`client_number`</u>`, client_name)`

Partial Dependencies:
- client_number -> client_name

**2NF**
> `SHOW (`<u>`show_date_time`</u>`, `<u>`play_number`</u>`, play_name, play_writer, total_number_of_patrons, theatre_id)`
> `THEATRE (`<u>`theatre_id`</u>`, theatre_street, theatre_town)`
> `BOOKING (`<u>`booking_number`</u>`, number_of_seats, total_amount_due, paid, client_number, show_date_time, play_number)`
> `CLIENT (`<u>`client_number`</u>`, client_name)`

Transitive Dependencies:
- theatre_id -> theatre_street, theatre_town
- play_number -> play_name, play_writer

**3NF**
> `SHOW (`<u>`show_date_time`</u>`, `<u>`play_number`</u>`, total_number_of_patrons)`
> `THEATRE (`<u>`theatre_id`</u>`, theatre_street, theatre_town)`
> `BOOKING (`<u>`booking_number`</u>`, number_of_seats, total_amount_due, paid, client_number, show_date_time, play_number)`
> `CLIENT (`<u>`client_number`</u>`, client_name)`
> `PLAY (`<u>`play_number`</u>`, play_name, play_writer)`
> `SHOW_THEATRE (`<u>`show_date_time`</u>`, `<u>`play_number`</u>`, theatre_id)`

Full Dependencies:
- show_date_time, play_number -> total_number_of_patrons
- theatre_id -> theatre_street, theatre_town
- play_number -> play_name, play_writer
- booking_number -> number_of_seats, total_amount_due, paid, client_number, show_date_time, play_number
- client_number -> client_name
- show_date_time, play_number -> theatre_id