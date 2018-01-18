//The sum of a Range exercise 4.1
function exercise4_1()
{

    function range(start, stop, step = 1)
    {
        let rangeArray = [];

        if (step < 0)
        {
            for (var i = start; i >= stop; i += step)
            {
                rangeArray.push(i);
            }
        }
        else
        {
            for (var i = start; i <= stop; i += step)
            {
                rangeArray.push(i);
            }
        }
        return rangeArray;
    }

    function sum(aRange)
    {
        var total = 0;
        for (var i = 0; i < aRange.length; i++)
        {
            total += aRange[i];
        }
        return total;
    }

    console.log(range(1, 10));
    // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(range(5, 2, -1));
    // → [5, 4, 3, 2]
    console.log(sum(range(1, 10)));
    // → 55
}

//Reversing an Array exercise 4.2
function exercise4_2()
{
    function reverseArray(anArray)
    {
        var revArray = [];

        for (var i = anArray.length - 1; i >= 0; i--)
        {
            revArray.push(anArray[i]);
        }
        return revArray;
    }

    function reverseArrayInPlace(anArray)
    {
        for (var i = 0; i < anArray.length / 2; i++)
        {
            var temp = anArray[i];
            anArray[i] = anArray[anArray.length - (i + 1)];
            anArray[anArray.length - (i + 1)] = temp;
        }
    }

    console.log(reverseArray(["A", "B", "C"]));
    // → ["C", "B", "A"];
    var arrayValue = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arrayValue);
    console.log(arrayValue);
    // → [5, 4, 3, 2, 1]
}

//A List exercise 4.4
function exercise4_4()
{
    function deepEqual(value1, value2)
    {
        if (typeof (value1) == "object" && value1 != null || typeof (value2) == "object" && value2 != null)
        {
            console.log(Object.entries(value1));
        }
    }

    var obj = { here: { is: "an" }, object: 2 };
    console.log(deepEqual(obj, obj));
    // → true
    console.log(deepEqual(obj, { here: 1, object: 2 }));
    // → false
    console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
    // → true
}
exercise4_4();