// Red: #FF232E
// Green: #57ED69
// Blue: #0083FF

// Return the hex colour of the room given the temperature
function generate_room_colour(temperature)
{
    var upper_limit = 22;
    var lower_limit = 19.5;

    if (temperature > upper_limit)
    {
        return '#FF4444';
    }
    else if (temperature < lower_limit)
    {
        return '#6DC2FF';
    }
    else
    {
        return '#57ED69';
    }
}

// Return the image to be displayed depening on background colour
function get_image(color)
{
    if (color == 'rgb(255, 68, 68)')
    {
        return 'images/fire.png';
    }
    else if (color == 'rgb(109, 194, 255)')
    {
        return 'images/snowflake.png';
    }
    else
    {
        return '';
    }
}

// Set image fore the room
function set_image(img_id, image)
{
    if (image != '')
    {
        $(img_id).attr('src', image);
        $(img_id).show();
    }
    else
    {
        $(img_id).hide();
    }
}
