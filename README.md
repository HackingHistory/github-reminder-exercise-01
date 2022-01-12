# In-Class exercise: Github, Markdown, JSON
The intended audience for this class is graduates of Hacking History or other courses making use of GitHub & teaching basic web development skills. However, I recognize that not all students will have acquired all the necessary skills before class. So, let's start with a crash course in three areas:

- using git and GitHub
- JSON data structures
- Markdown test format

## TL;DR
In this in-class exercise, each of you will do the following:
- create a github account and login
- using the built-in editor on the github website, add a new **json** file to the directory `json-files` (see below for deta
- using the built-in editor on the github website, add a new **markdown** file to the directory `markdown-files`
- optionally upload a picture of yourself to the directory `docs/images`

Details below.


## Understanding Git and GitHub
All modern code development uses Version Control software; all but a tiny percentage use [Git](https://www.freecodecamp.org/news/what-is-git-and-how-to-use-it-c341b049ae61/) for version control; a vast majority of free and open source projects are housed on [Github](https://github.com/). If you've taken HIS393, then you already have an account; if you're new, please [sign up for an account](https://github.com/signup) right away.  

Once you have an account, you may want to [read the quickstart documentation](https://docs.github.com/en/get-started/quickstart) on github to get an introduction to some basic concepts. However, you can do this exercise in class without much deep understanding of how things work. Simply follow the instructions below. 

## Your Data: JSON
We will start by building a simple [JSON data structure]{(https://www.nylas.com/blog/the-complete-guide-to-working-with-json/) to represent each member of the class. I've already added one for myself, and you're welcome to look at `matt.json` in the `json-files` directory. Alternatively, you can simply copy the JSON below and amend it as appropriate:

``` json
{
"name": "Your Name",
"email": "your.email@mail.utoronto.ca",
"github": "yourgithubid",
"techskills": 3,
"periods": ["ancient", "medieval", "early modern", "modern", "contemporary"],
"regions": ["Asia", "Europe", "Africa", "North America", "South/Central America", "Oceania"],
"styles": ["political", "diplomatic", "cultural", "social", "intellectual", "economic"],
"picture": "../images/your-image.jpg",
"blurb": "../markdown-files/your-markdown-file.md"
}
```

**Explanation:** each line in this file contains some informtion about you which will be used later in a visual display. 
- `name` and `email` are self-explanatory.
- `github` is your github ID 
- for `techskills`, rate yourself between 1 star (no skills at all) and 5 stars (ready for an industry job). 
- for `periods`, `regions`, and `styles`, delete all the entries that you don't already have some interest/experience in. If you think I've missed something (e.g., maybe you thnk `women's` or `science` or `race`  should be a top-level category in `styles`), then simply add the missing element in to the appropriate list.  Be sure to **separate elements by commas**, and **surround individual names in double quotes**, and also make sure your new element is **inside the `[]` brackets**. 
- `picture` should be the path to your picture -- either a [relative URL](https://www.w3.org/TR/WD-html40-970917/htmlweb.html#h-5.1.2) (starting with either `./images` or just `images`) to an image in the `images` directory, or a full URL to a picture on the web 
- `blurb` is the relative path to your markdown file, which should be named either `yourfirstname.md` or `yourfirstname-yourlastname.md`. 

You create the file by navigating to the `json-files/` directory and clicking the `Add File` button near the top right, then choosing `Create new file` from the drop-down menu. We'll go over the full creation method in class. 

## Your Description: Markdown

The next and potentially final step is to introduce yourself and your intellectual interests more fully by writing a brief (1-paragraph) self-description. We'll write in the [markdown](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax), which gives a imple format for bold, italics links, and other formatting elements. You shouldn't need more than the basics for this assignment.  You are welcome to look at `matt.md` in the `markdown-files` directory for an example.  

When you're done, I'll show you a bit more about how this repository works (those of you who have taken HIS393 won't be especially surprised). 
