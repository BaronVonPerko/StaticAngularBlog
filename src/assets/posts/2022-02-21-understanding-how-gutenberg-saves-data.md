---
date: 2022-02-21
title: Understanding How Gutenberg Saves Data
image: wordpress.jpg
categories: WordPress
tags: gutenberg,wordpress
---

With full-site editing released in WordPress 5.9, it's becoming 
impossible to ignore Gutenberg, the block editor.  I've been avoiding
it, as I think creating WordPress sites in plain PHP works great.
One of the pain points that I've had in the past learning to write
custom blocks is that it takes me much longer to create a custom block
than to just style a custom shortcode.  However, it is hard to beat
that slick Gutenberg UI for users.

I spent some time recently digging through the ever-changing WordPress
codex, learning as much as I could about the system.  Once thing that 
always bugged me was understanding how the code *worked*.  I knew that
there was an **edit** and a **save** function, but it never really
made much sense to me.  I was used to just using PHP to echo out my content,
and styling it with CSS.  

After doing some experimenting, I learned a lot and I think that I can provide
a concise and easy way of understanding what you're actually developing
when you are creating a custom block.

## Separation of Two Presentations

It's kind of strange to think about, but you really have two different 
presentations.  One is for the block editor itself, and one is for what
the readers will see on the front-end of the WordPress site.  

At first thought when reading that sentence you would probably think that
they would be the same, since after all we are working with a WYSIWYG
editor, right?

The main difference to remember here is that the editor will need to 
use special components that allow the user to click and change areas
within the block.  On the front-end, we're just needing to display
the saved data in a stylish way.  It should look very similar in the
editor and on the front-end.

> When I say "front-end", I am specifically referring to what the reader
> on the site would see.

## Saving Content Data with Attributes

So you have your *edit* and *save* functions created, but you want
to allow the user to actually input something.  How is this data
actually translated from the *edit* function over to the *save*
function, and then actually persisted in the database?

This is where attributes come in.

It's an odd name in my opinion, but the attributes are how we
describe the metadata and content associated with an individual
block.



Something else to keep in mind... when a user clicks the **Publish**
button in WordPress, the block content is then saved to the database.
This means that if you want to make some changes to your block in code,
it will not reflect on the front-end.  That content would have to be
opened in the editor, and re-published.
