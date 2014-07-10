# Middleman based prototype toolset for Workopolis
Engineered with care by Luke zhang(@lukezhangstudio)

##Getting Started
1. Download and Run the [rails installer](http://railsinstaller.org). The file (0_INSTALL THIS FIRST INSTALLER.exe) is conveniently placed in the I drive copy of this project

2. Install ruby gems by running the 1_install_plugins.bat or typing this into the command window 
```
bundle install
```
If you encounter errors, try unplugging from the corporate internet and using WGuest to bypass firewall.

3. Start the server using the handy 2_start_server.bat or running
```
middleman server
```
Go to ```localhost:4567``` to view your page

4. Livereload is running, so any changes you make will magically be refreshed in the browser.

## Handy helpers during prototyping
- A list of handy ```lorem``` helpers exist. For example, if you want to insert 5 sentences of lorem ipsum, you would write
`<%= lorem.sentences 5 %>`

Other methods available to be used for text:

``` ruby
lorem.sentence      # returns a single sentence
lorem.words 5       # returns 5 individual words
lorem.word
lorem.paragraphs 10 # returns 10 paragraphs 
lorem.paragraph
lorem.date          # accepts a strftime format argument
lorem.name
lorem.first_name
lorem.last_name
lorem.email
```
And to use placeholder images:

``` ruby
lorem.image('300x400')
  #=> http://placehold.it/300x400
lorem.image('300x400', :background_color => '333', :color => 'fff')
  #=> http://placehold.it/300x400/333/fff
lorem.image('300x400', :random_color => true)
  #=> http://placehold.it/300x400/f47av7/9fbc34d
lorem.image('300x400', :text => 'blah')
  #=> http://placehold.it/300x400&text=blah
```

- Workopolis specific helpers exist using the same format as the lorem helpers. If you want a sentence for B2B page `<%= lorem.b2b_sentence %>

and more:
```ruby
lorem.job_title  #returns a popular job title

lorem.b2b_sentences 5    #returns 5 B2B sentences
lorem.b2c_sentences 5    #returns 5 B2C sentences

lorem.b2b_paragraphs 3  #returns 3 B2B paragraphs
lorem.b2c_paragraphs 10  #returns 10 B2C paragraphs
```

## Publishing the prototype to Static Html files
Sometimes you might want to generate static html files. For example, if you want to show the prototype without installing all the dependencies. 

Simply run ``` middleman build``` or run the 3_ExpportPrototypeToStaticHtml.bat

- A common problem is relative file paths. Windows file paths work differently than the relative filepaths in the browser url. Some images/files/stylesheets would work when running the server but fail when compiled. 
- Using [asset helpers](http://middlemanapp.com/basics/helpers/) where possible
- Paths in javascript is more sensitive

