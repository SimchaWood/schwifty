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
