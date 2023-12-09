function ceaserCipher(str, num)
{
    let strArr = str.split('');
    for (let i = 0; i < strArr.length; i++)
    {
        let charCode = strArr[i].charCodeAt();
        if (charCode >= 65 && charCode <= 90)
        {
            charCode += num;
            if (charCode > 90)
            {
                charCode = 64 + (charCode - 90);
            }
            strArr[i] = String.fromCharCode(charCode);
        }
        else if (charCode >= 97 && charCode <= 122)
        {
            charCode += num;
            if (charCode > 122)
            {
                charCode = 96 + (charCode - 122);
            }
            strArr[i] = String.fromCharCode(charCode);
        }
    }

    return strArr.join('');
}


console.log(ceaserCipher('Zoo Keeper', 2)); // Bqq Mggrgt