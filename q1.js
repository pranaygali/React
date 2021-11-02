var random = "Naruto is great";

var random2 = random;

var maxNum =0;

var letter={};

for(var count = 0; count<=random.length;count++)
{
    for(var count2 = 0; count2<=random.length;count2++)
    {    
    if(random[count] == random2[count2])
        {
                maxNum++;

        }


}
}