#!/usr/bin/env groovy
import java.lang.BigDecimal
package foo.bar

println "Hello from the shebang line"

def foo = 42;

char ch = "foo";
float f = 3.14;
BigDecimal bd = 3.14;

def pattern = ~/^(?:(start))(?<!foo)(?<=bar)MUSKET_(?<cfgName>[A-Z0-9_]+)(._fibble\d*){0,1}(?=foo)(?!bar)$/

interface Greeter {                                         
    void greet(String name)                                 
}

/**
 * A Class description
 */
static class Person {
    /** the name of the person */
    String name

    /**
     * Creates a greeting method for a certain person.
     *
     * @param otherPerson the person to greet
     * @return a greeting message
     */
    String greet(String otherPerson) {
       "Hello ${otherPerson}"
    }

    ArrayList<Integer> myList = new ArrayList<>(3);

    public static void foobar() {}
}

def person = [name: 'Guillaume', age: 36]
assert "$person.name is $person.age years old" == 'Guillaume is 36 years old'

def sum = "The sum of 2 and 3 equals ${2 + 3}"
assert sum.toString() == 'The sum of 2 and 3 equals 5'

int xInt = 0b10101111
BigInteger xBigInteger = 0b111100100001

def startingAndEndingWithANewline = '''
line one
line two
line three
'''
