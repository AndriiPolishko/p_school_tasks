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

const deEqualizer = function (res) {
    let newRes ;
    for(let i = 0; i < res.length; i++) {
        if(res[i] !== "0") {
            newRes = res.slice (i);
            break
        }
    }
    return newRes;
}

const a_plus_B = function(A,B) {
    A = A.replace(/,/g, '');
    B = B.replace(/,/g, '');

    let aNeg = false, bNeg = false;
    if(A[0] === "-") {
        aNeg = true;
        A = A.slice(1);
    }
    if(B[0] === "-") {
        bNeg = true;
        B = B.slice(1);
    }

    [A,B] = equalizer(A,B)
    let aGrater = false, bGrater = false;
    if(A>B) aGrater = true;
    else if (B>A)   bGrater = true;

    let res = "", temp;
    let n = A.length ;
    let buffer;
    for(let i = n-1; i >= 0; i--) {
            if(buffer) {
                if(aNeg && bNeg || !aNeg && !bNeg) {
                    temp = (+A[i] + +B[i] +buffer).toString()
                    if(temp.length >1) {
                        buffer = +temp[0];
                        temp = temp[1]
                    }else
                        buffer = undefined
                }
                if(aNeg && !bNeg || !aNeg && bNeg) {
                    if(aGrater)
                        temp = +A[i] - +B[i] - 1;
                    if(bGrater)
                        temp = +B[i] - +A[i] - 1;
                    if(temp < 0) {
                        temp = 10 + temp
                        buffer = -1;
                    }
                    else
                        buffer = undefined
                }
            } else {
                if(aNeg && bNeg || !aNeg && !bNeg)
                    temp = (+A[i] + +B[i]).toString()
                else if(aNeg && !bNeg || !aNeg && bNeg) {
                    if(aGrater)
                        temp = +A[i] - +B[i];
                    if(bGrater)
                        temp = +B[i] - +A[i];
                    if(temp < 0) {
                        temp = 10 + temp
                        buffer = -1;
                    }
                }

            }
            if(temp.length >1) {
                buffer = +temp[0];
                temp = temp[1]
            }
            res = temp + res;
        }
    res = deEqualizer(res)
    if((aNeg && bNeg) || (aNeg && aGrater) || (bNeg && bGrater))
        res = "-" + res;
    return res;
}

console.log(a_plus_B("8090","-1236"))

