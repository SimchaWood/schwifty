<?php
class HelloWorldTest extends PHPUnit_Framework_TestCase
{
    /**
     * @var PDO
     */
    private $pdo;
    public function setUp()
    {
        $this->pdo = new PDO($GLOBALS['db_dsn'], $GLOBALS['db_username'], $GLOBALS['db_password']);
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->pdo->query("CREATE TABLE hello (what VARCHAR(50) NOT NULL)");
    }
    /**
     * A summary informing the user what the associated element does.
     * 
     * A *description*, that can span multiple lines, to go _in-depth_ into the details of this element
     * and to provide some background information or textual references. {@link example.com Documentation}
     * 
     * Here an example of the italics tag: <<i>>Hello, world!<<i>>
     *
     * @param string $myArgument With a *description* of this argument, these may also
     *    span multiple lines.
     *
     * @access public
     * @return void
     */
    public function tearDown()
    {
        $this->pdo->query("DROP TABLE hello");
    }
    public function testHelloWorld()
    {
        $helloWorld = new HelloWorld($this->pdo);
        $this->assertEquals('Hello World', $helloWorld->hello());
    }
    public function testHello()  
    {
        $helloWorld = new HelloWorld($this->pdo);
        $this->assertEquals('Hello Bar', $helloWorld->hello('Bar'));
    }
    public function testWhat()
    {
        $helloWorld = new HelloWorld($this->pdo);
        $this->assertFalse($helloWorld->what());
        $helloWorld->hello('Bar');
        $this->assertEquals('Bar', $helloWorld->what());
    }
}

class A {

  public function getClassName(){
      return __CLASS__;
  }

  public function getRealClassName() {
      return static::class;
  }
}

/** @var string[] An array of string objects. */

function foo($bar = "bar")
{
  $rx = "/^(?:(start))(?<!foo)(?<=bar)MUSKET_(?<cfgName>[A-Z0-9_]+)(._fibble\d*){0,1}(?=foo)(?!bar)$/";
  echo "foo $bar";
}
?>

<?php namespace foo;
  class Cat {
    static function says() {echo 'meoow';}
  }
?>
