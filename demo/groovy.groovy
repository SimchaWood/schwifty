#!/usr/bin/env groovy
import java.lang.BigDecimal

println "Hello from the shebang line"

def foo = 42;

char ch = "foo";
float f = 3.14;
BigDecimal bd = 3.14;

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

    public static void foobar() {}
}

package foo.bar
