using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NightOwl.demo
{
    public class CSharp
    {
        private readonly string _testField;

        public string TestProperty { get; set; }

        #region RegionTest
        public string Getter => TestProperty;

        public CSharp(string testField)
        {
            _testField = testField;
            string text = $"{TestProperty} this is a text string";
            int number = 1;
        }

        #endregion

        /// <summary>
        /// Hello this is an xml comment &mdash; with markup.
        /// </summary>
        /// 
        /// <![CDATA[ds]]>
        /// <param name="testParam">param comment</param>
        /// <returns>A value.</returns>
        public async Task<string> TestMethod(string testParam)
        {
            for(var i = 0; i <= 5; i++)
            {
                testParam.Trim();
                _testField?.Trim();

                var enumVal = (int)TestEnum.TestValue;


                // Hello this is a normal comment
                new List<string>().Where(c => c == "Test");
            }

            return await Task.FromResult(testParam);
        }
    }

    public enum TestEnum
    {
        TestValue
    }
}

public class Person
{
    protected string ssn = "444-55-6666";
    protected string name = "John L. Malgraine";

    public virtual void GetInfo()
    {
        Console.WriteLine($"Name: {0}", name);
        Console.WriteLine($"SSN: {0}", ssn);
    }
}
class Employee : Person
{
    public string id = "ABC567EFG";
    public override void GetInfo()
    {
        // Calling the base class GetInfo method:
        base.GetInfo();
        Console.WriteLine("Employee ID: {0}", id);
    }
}

class TestClass
{
    static void Main()
    {
        Employee E = new Employee();
        E.GetInfo();
    }
}

public class Employee
{
    private string alias;
    private string name;

    public Employee(string name, string alias)
    {
        // Use this to qualify the members of the class 
        // instead of the constructor parameters.
        this.name = name;
        this.alias = alias;
    }
}

string filename1 = @"c:\documents\files\u0066.txt";

struct Point
{
    public int x, y;
    public Point(int x, int y) 
    {
        this.x = x;
        this.y = y;
    }
}
