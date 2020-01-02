#######
Heading
#######

Paragraphs contain text and may contain inline markup:

*emphasis*, **strong emphasis**, `interpreted text`, ``inline
literals``, standalone hyperlinks (http://www.python.org),
external hyperlinks (Python_), internal cross-references
(example_), footnote references ([1]_), citation references
([CIT2002]_), substitution references (|example|), and `inline
internal targets`_.

Paragraphs are separated by blank lines and are left-aligned.

- This is a bullet list.
- Bullets can be "*", "+", or "-".

1.  This is an enumerated list.
2.  Enumerators may be arabic numbers, letters, or roman numerals.

what
    Definition lists associate a term with a definition.

how
    The term is a one-line phrase, and the definition is one
    or more paragraphs or body elements, indented relative to
    the term.

:what: Field lists map field names to field bodies, like
       database records.  They are often part of an extension
       syntax.

:how: The field marker is a colon, the field name, and a
      colon.

-a            command-line option "a"
-b file       options can have arguments

::
    if literal_block:
        text = 'is left as-is'
        spaces_and_linebreaks = 'are preserved'
        markup_processing = None

Block quote:

    This theory, that is mine, is mine.
    -- Anne Elk (Miss)

>>> print 'Python-specific usage examples; begun with ">>>"'

+------------------------+------------+----------+
| Header row, column 1   | Header 2   | Header 3 |
+========================+============+==========+
| body row 1, column 1   | column 2   | column 3 |
+------------------------+------------+----------+
| body row 2             | Cells may span        |
+------------------------+-----------------------+

====================  ==========  ==========
Header row, column 1  Header 2    Header 3
====================  ==========  ==========
body row 1, column 1  column 2    column 3
body row 2            Cells may span columns
====================  ======================

.. [1] A footnote contains body elements, consistently indented by at least 3 spaces.

.. [CIT2002] Just like a footnote, except the label is textual.

.. _Python: http://www.python.org

.. _example:

.. image:: mylogo.png

.. |symbol here| image:: symbol.png

.. Comments begin with two dots and a space.  Anything may
   follow, except for the syntax of footnotes/citations,
   hyperlink targets, directives, or substitution definitions.

r"""This is a raw docstring.  Backslashes (\) are not touched."""

Want to learn about `my favorite programming language`_?

.. _my favorite programming language: http://www.python.org
