const equalizer = function(A,B) {
    if(A.length > B.length) {
        while(A.length !== B.length) {
            B = "0" + B;
        }
    }
    else if(A.length < B.length) {
        while(A.length !== B.length) {
            A = "0" + A;
        }
    }
    return [A,B]
}

const a_plus_B = function(A,B) {

    A = A.replace(/,/g, '');
    B = B.replace(/,/g, '');
    [A,B] = equalizer(A,B)
    let res = "", temp;
    let n = A.length ;
    let buffer;
    for(let i = n-1; i >= 0; i--) {
            if(buffer) {
                temp = (+A[i] + (+B[i]) +buffer).toString()
                buffer = undefined
            } else {
                    temp = (+A[i] + (+B[i])).toString()
            }
            if(temp.length >1) {
                buffer = +temp[0];
                temp = temp[1]
            }
            res = temp + res;
        }

    return res;
}

console.log(a_plus_B("12","123,456,780"))

