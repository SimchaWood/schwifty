#!/usr/bin/env groovy
import java.lang.BigDecimal

println "Hello from the shebang line"

def foo = 42;

char ch = "foo";
float f = 3.14;
BigDecimal bd = 3.14;

def pattern = ~/^(?:(start))(?<!foo)(?<=bar)MUSKET_(?<cfgName>[A-Z0-9_]+)(._fibble\d*){0,1}(?=foo)(?!bar)$/

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

package foo.bar
