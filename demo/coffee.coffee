square = (x) -> x * x
cube   = (x) -> square(x) * x

fill = (container, liquid = "coffee") ->
  "Filling the #{container} with #{liquid}..."

author = "Wittgenstein"
quote  = "A picture is a fact. -- #{ author }"

NUMBER     = ///
  ^ 0b[01]+    |              # binary
  ^ 0o[0-7]+   |              # octal
  ^ 0x[\da-f]+ |              # hex
  ^ \d*\.?\d+ (?:e[+-]?\d+)?  # decimal
///i

rx = ///^(?:(start))(?<!foo)(?<=bar)MUSKET_(?<cfgName>[A-Z0-9_]+)(._fibble\d*){0,1}(?=foo)(?!bar)$///i

sentence = "#{ 22 / 7 } is a decent approximation of π"

html = """
       <strong>
         cup of coffeescript
       </strong>
       """

class Animal
  constructor: (@name) ->

  move: (meters) ->
    alert @name + " moved #{meters}m."

class Snake extends Animal
  move: ->
    alert "Slithering..."
    super 5

class Horse extends Animal
  move: ->
    alert "Galloping..."
    super 45

sam = new Snake "Sammy the Python"
tom = new Horse "Tommy the Palomino"

sam.move()
tom.move()
