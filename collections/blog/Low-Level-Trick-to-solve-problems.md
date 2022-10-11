---
title: Low-Level Trick to solve problems
date: 2022-05-29
description: Solve programming problems with one of the most popular Low-Level Technics
lang: en
path: Low-Level-Trick
---

# Bit Manipulation & Bitwise Operators

When you compile anything with your favorite programming language it’s converted to machine code 

There’s a very impressive trick that could help you to solve problems 😎

---

### **what are the Bitwise operators?**

1. The **& (bitwise AND)** in C or C++ takes two numbers as operands and does AND on every bit of two numbers. The result of AND is 1 only if both bits are 1.
2. The **| (bitwise OR)** in C or C++ takes two numbers as operands and does OR on every bit of two numbers. The result of OR is 1 if any of the two bits is 1.
3. The **^ (bitwise XOR)** in C or C++ takes two numbers as operands and does XOR on every bit of two numbers. The result of XOR is 1 if the two bits are different.
4. The **<< (left shift)** in C or C++ takes two numbers, the left shifts the bits of the first operand, and the second operand decides the number of places to shift.
5. The **>> (right shift)** in C or C++ takes two numbers, the right shifts the bits of the first operand, and the second operand decides the number of places to shift.
6. The **~ (bitwise NOT)** in C or C++ takes one number and inverts all bits of it.

## Let’s know how it works by example

Put in your mind that every number you will deal with will be converted into **binary** 
and If you are familiar with **digital circuits**, it will be so easy to understand how they work

### Example #1

```cpp

int main(){
		// a = 5(00000101), b = 9(00001001)
    int a = 5, b = 9;
    // The result is 00000001
    cout<<"a = " << a <<","<< " b = " << b <<endl;
    cout << "a & b = " << (a & b) << endl;

}
```

- **let’s put a sample rule 
0 is false
1 is true 
every number will be reconverted into decimals again when printing it.**

### Explanation #1

The & operator work like if the two cases are 1 it will return 1
so 
1&1 = 1
1&0 = 0
0&1 = 0
0&0 = 0  

### Example #1

a = 5 , in binary it will be 00000101

b = 9 , in binary it will be 00001001

so we take each digit and apply our & rule 

1 & 1 = 1, and so on..

so the result will be a & b = 00000001

---

### Example #2

```cpp
// The result is 00001101
    cout << "a | b = " << (a | b) << endl;
```

### Explanation #2

The | operator work if one of the cases is 1 it will return 1
1|1 = 1
1|0 = 1
0|1 = 1
0|0 = 0

### Example #2

a = 5 , in binary it will be 00000101

b = 9 , in binary it will be 00001001

so we take each digit and apply our | rule 

1 | 1 = 1, and so on..

so the result will be a | b = 00001101

---

### Example #3

```cpp
// The result is 00001100
    cout << "a ^ b = " << (a ^ b) << endl;
```

### Explanation #3

The ^ operator it’s a little bit confusing, it works if the two numbers are different it will return 1
1^1 = 0
1^0 = 1
0^1 = 1
0^0 = 0

### Example #3

a = 5, in binary it will be 00000101

b = 9, in binary it will be 00001001

so we take each digit and apply our ^ rule 

1 ^ 1 = 0, and so on..

so the result will be a ^ b = 00001100 = 12 in decimal 

---

### Example #4

```cpp
// The result is 11111010
    cout << "~a = " << (~a) << endl;
```

### Explanation #4

The ~ operator gets the opposite of the number so,
~1 = 0
~0 = 1

### Example #4

a = 5, in binary it will be 00000101

so we take each digit and apply our ~ rule 

~1 = 0 , and so on..

so the result will be  ~a  = 11111010 = -6  in decimal it’s **too way hard to convert it to decimal** with basic rules so search for 2’s complement, 1’s complement and Signed magnitude  
**keep in mind - the last left digit is to represent if it is positive = 0 or negative = 1, when you apply this operator you should add +1 to the result if you want to get the negative value of the number**

---

### Example #5

```cpp
// b=9 (00001001)
// The result is 00010010
    cout<<"b << 1" <<" = "<< (b << 1) <<endl;
 
    // The result is 00000100
    cout<<"b >> 1 "<<"= " << (b >> 1 )<<endl;
```

### Explanation #5

The **<< operator** shift the bit pattern n time to **The Left** which in our case n=1 and append 0 at the end of the number, the Left shift is equivalent to **multiplying** the bit pattern with $2^n$
 ( if we are shifting n bits ).
1 = 00000001
1 << 1 = 00000010 = 2 = $(1*2^1)$ and so on ..
in the **example** 
9 << 1 = 00010010 = $(9 * 2^1)$ = 18

---

The **>> operator** shifts the bit pattern n time to **The Right** which in our case n=1 and append 1 at the end of the number, the Left shift is equivalent to dividing the bit pattern with $2^n$
 ( if we are shifting n bits ). **Keep in mind Binary has no float points in this case**
4 = 00000100
4 >> 1 = 00000010 = 2 = $(4/2^1)$

5 = 00000101
6 >> 1 = 00000010 = 2 = $(5/2^1)$ in decimal and so on ..

in the **example** 

9 >> 1 = 00000100 = 4 = $( 9/2^n )$ in decimal

---

## Let’s know how Bit manipulation works with Example

and why is so helpful for an optimized solution, its works like a magic **🪄** 

### let’s start with an easy example

we want to know if x is a power of 2 

**implementation**

```cpp
bool isPowerOfTwo(int x)
    {
        if(x == 0)
            return false;
        else
        {
            while(x % 2 == 0) x /= 2;
            return (x == 1);
            }
    }
```

The above code has a time complexity O(log N)

---

**Is there an optimal approach?**

The same problem can be solved using bit **manipulation**.

Consider a number x that we need to check for being a power for 2.

Now think about the binary representation of (x-1).

(x-1) will have all the bits the same as x, except for the **rightmost** 1 in x and all the bits to the right of the rightmost 1.

Let, x = 4 = (100)2   x - 1 = 3 = (011)2

Let, x = 6 = (110)2   x - 1 = 5 = (101)2

It might not seem obvious with these examples, but the binary representation of (x-1) can be obtained by simply **flipping** all the bits to the right of rightmost 1 in x and also including the rightmost 1.

Now think about x & (x-1). 

x & (x-1) will have all the bits equal to the x except for the rightmost 1 in x.

Let, x = 4 = (100)2   x - 1 = 3 = (011)2   x & (x-1) = 4 & 3 = (100)2 & (011)2 = (000)2

Let, x = 6 = (110)2   x - 1 = 5 = (101)2   x & (x-1) = 6 & 5 = (110)2 & (101)2 = (100)2

in x= 6, 6 is not a power of 2 so when x & (x-1) = (100)2 that mean it’s not what we want 

Properties for numbers which are powers of 2, is that they have one and only one bit set in their binary representation. 

If the number is neither zero nor a power of two, it will have 1 in more than one place. So if x is a power of 2 then x & (x-1) will be 0.

**Implementation:**

```cpp
bool isPowerOfTwo(int x)
    {
        // x will check if x == 0 and !(x & (x - 1)) will check if x is a power of 2 or not
        return (x && !(x & (x - 1)));
    }
```

and the above code has time complexity O(1)

---

## Another Hard Example to see how much bit manipulation is powerful

Given a string array of `words`
, return *the maximum value of*
 `length(word[i]) * length(word[j])`
 *where the two words do not share common letters*
. If no such two words exist, return `0`

---

Idea is to create a bitmask of each string and compare it with the bitmask of other strings.

**Bitmask Explanation**

**-**Let's say we have three strings "abc", "def" and "abde", corresponding bitmasks of these strings will be "111", "111000", and "11011". how?

For each character, we'll need to find the index where we need to set 1 in our bitmask. So for character "a" index will be 0, for "b" it will be 1, for "c" it will be 2 and so on.

The index can be easily found by subtracting each character by 'a' Ex.

```java
'a' - 'a' = 0
'b' - 'a' = 1
'c' - 'a' = 2
```

Next step is to left shift 1 by the index value.

```java
for 'a', index will be 0
1 << 0 = 1

'b', index will be 1
1 << 1 = 10

'c', index will be 2
1 << 2 = 100

```

After shifting, the last step is to OR the shifted value of current character with the bitmask of current string. So if we OR the shifted values of character "a", "b" and "c".

`001 | 010 | 100 = 111`

**Check for common characters -**If two strings s1 and s2 have common characters, then they will have 1 at the same index in the bitmask and if we do AND of the bitmasks of s1 and s2, it will result in a value greater than 0.

```cpp
bitmask[s1] & bitmask[s2] = 0, if no common characters
							>0, otherwise

Ex. bitmask of "abc" and "def" is 111 and 111000, respectively.

111 & 111000 = 0, hence no common characters

bitmask of "abc" and "abde" is 111 and 11011, respectively.

111 & 11011 = 00011 > 0, hence common characters found

```

**Finally, code** -

```java
class Solution {
    public int maxProduct(String[] words) {
        int n = words.length;
        int[] bitmask = new int[n];
        int max = 0;

        for(int i=0; i<n; i++) {
            // Calculate bitmask for current word
            for(int j=0; j<words[i].length(); j++) {
                // index will be - for a -> 0, b -> 1, c -> 2 and so on
                int index = words[i].charAt(j) - 'a';

                // left shift 1 by index and OR it with the current bitmask
                bitmask[i] |= (1 << index);
            }

            // Compare bitmask of current string with previous strings bitmask
            for(int j=0; j<i; j++) {
                /* If there is a 1 at the same index of current string {i} and {j},
                then bitmask of i and j string will result in a number greater than 0,
                else it will result in 0 */
                if( (bitmask[i] & bitmask[j]) == 0 )
                    max = Math.max(max, words[i].length()*words[j].length());
            }
        }

        return max;
    }
}

```

Time Complexity = O(n.(k+n))