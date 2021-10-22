for(let i = 1; i <= 9; i++)
{
    let n = "";
    for(let j = 1; j <= 9; j++)
    {
        n = n + (i * j);
        n = n + " ";
    }
    console.log(n);
}