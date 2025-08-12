Right-click this file and click "Open Preview" in VSCode or use whatever Markdown viewer you know!

# Setup

* I recommend using VSCode, it's got a ton of extensions that help with syntax highlighting and stuff.
* Get Tailwind CSS Intellisense (bradlc.vscode-tailwindcss), it lets you check if something is actually a tailwind class, which is nice
* get any other extensions you like beyond that, look out for stuff for React, CSS, and HTML, obviously, but definitely get Tailwind CSS Intellisense
*`.vscode` is a directory that contains VSCode-specific stuff, doesn't get published and doesn't need to be committed either
* `amplify` is a directory that contains AWS Amplify-specific stuff, you probably never need to change it though
* `build` is a directory created when you use `npm build`, it contains an optimized build of the site that you can then test. Also not comitted.
* `node_modules` is a directory that contains all those packages you install with `npm install`, so many files, so it's not worth committing. You commit the files 
* `public` contains files that need to be in a predictable location (since webpack renames files and such for various reasons, this folder is the exception to that)
* `src` contains basically everything
	* `components` contains all the page-level components like the projects, the about page, etc.
	* `contents` contains arrays and such that determine the contents of various lists.
	* `reusables` are components that are useful in various pages, like the component for many project pages, and the component to embed LaTeX content.
	* `utils` are components that are more abstract, returning React state variables and whatnot.
* `.gitattributes` and `.gitignore` are files specific to git, `.gitattributes` tells it to store video files in a format called LFS that keeps the repository's own copies of those files as pointers to a separate version management for those files and `.gitignore` tells git what files should never get committed anyway

1. Use cmd instead of PowerShell, you can set the default console to be cmd through VSCode settings. Install all the packages with `npm install`. This gives you a local copy of the packages, and takes a while.
2. Use `amplify init` and `amplify configure`. Ignore all the pages it opens automatically. It will ask you to put in credentials, use the ones in the readme/provided again later. The shorter one is the `accessKeyId`, the second is the `secretAccessKey`. You should use the existing profile `prod` to deploy to the live site. Anything else deploys to another profile that isn't linked to the live site and is not very useable unless you mess with configuration settings that you'd need to set back again later.
3. Make changes and commit them to your local git repository.
4. use `npm start` (you can do this  before 3.) to create a local server that shows the site as it is. Changes made should reflect on the site, though sometimes it requires rerendering the page to see.
5. use `amplify deploy` (optionally with `-y` after to automatically say yes) to push changes to the live site. You can kill the `npm start` process with Ctrl + C or use a second terminal.
6. Check the live site at `https://ceas5.uc.edu/IRAS-Lab/`!


# Important notes

1. React
	- Link: Renders a link (`a` element) with a destination based on the `to` property.
	- `import` and `export`: Each JS file can import things from various files, including CSS (e.g. `import "./style.css"`), images, media (e.g. `import ImageName from "./path/to/image.png"`), and other JS files. JS files can also export various things, such as constants, functions, and more. Exporting takes on two forms: "default" and named. The `export` keyword alone takes a named value and exposes it to other files to be imported with the same name, wrapped in `{}` brackets (e.g. `import { VariableOne, NamesArray } from "../../path/to/js.js"`). Alternatively, using the keyword `default` after `export` exposes a value without a name, which can be imported with any name the importing file desires (e.g. `import NameArrayCool from "../../path/to/js.js`). Named exports can also be renamed by adding `as NewName` after each symbol.
	- Returning HTML through JSX: You can directly type HTML into the functions instead of returning strings. Wrap the HTML in a pair of `()`s. The code returned must have a single parent element, but this can be done with `<>` and `</>`, which are removed on render. You can also return `null` to render nothing. To insert JS within this HTML, use `{}` around it. You can set styles, hide certain elements, or dynamically map an array to elements.
	
2. ReactRouter package
	- BrowserRouter: handles linking the browser url to page behavior; `basename="/IRAS-Lab"` tells it that all locations are going to start with [domain]/IRAS-Lab/[whatever else]
	- Routes: (note the s) Only takes `<Route>` elements, and selects the best match to render, causing the rest to render `null` (not the text, just nothing). Order does not matter.
	- Route: Describes an element that is only rendered under a certain condition: the location matches the Route's own `path` property. Due to BrowserRouter, this is based on the user's browser's current location. Children elements are always other Routes, and paths are relative. Trailing `/`s have no effect, `exact` property causes this Route to only render when the current location matches the `path` property exactly; otherwise, will render elements in child locations as well (e.g. a path that matches `/about` would by default also match `/about/more`). `element` or `render` properties determine what is actually rendered: `element` takes an element whcih can be dynamically defined, `render` takes a function.
	- Outlet: Renders child Route that matches; for instance, on the `CurrentProjects` component, the `CurrentProjectList` component is also rendered, since a `Route` element with the index property (essentially having no path) is a child of the `Route` element that contains the `CurrentProjects` component.
	
3. Specific to this project
	- Git LFS and Amplify: Some files, like videos, are version controlled using Git LFS, which does not come by default with Git, sometimes, apparently? On the source files these will appear as pointer files with information that AWS Amplify then uses to pull the appropriate version of the videos. This does mean they will appear incorrectly without using Amplify, however.
	- NewsCard: Takes an object with members `link` (where it links to), `title` (the text), and `date` (the date)
	- ProfileUI: Takes an object with members `imgUrl` (a URL to an image, can pass in the variable under which an image is imported), `name`, `title`, and `des` (a function that returns the elements to be placed inside the box)
	- ProjectUI: Takes an object with members `Background` (url to a banner video if applicable), `BackgroundImage` (the same for images), `projectTitle`, `projectTeaser` (both text), `projectDescription` (a function that returns HTML code with the description), `projectImage` (an array of images displayed at the bottom if applicable), `projectVideo` (the same for videos), and `publications` (a function that returns HTML code with publications, if applicable)

# Website layout

	/IRAS-Lab (The true root of the app. Every page falls in this directory.)

		/
		Nav: the navbar, always present through the Outlet element.
			About: The top page.

			/Oppoturnities
			Oppoturnities: The "oppoturnities" page. Not currently being used, so it's commented out.
				OppoturnitiesList: An index Route renders this. List of opportunities

			/News
			News: The news page.
				This page works by mapping the contents of the array `News_contents` to corresponding `NewsCard` elements.

			/People
			People: The people page.
				This page works by mapping the contents of the array `People_contents_falcuty` [sic], `People_contents_colaborating_falcuty_within_UC` [sic], etc. to corresponding `ProfileUI` elements.

			/CurrentProjects
			CurrentProjects: The Current Projects page.
				CurrentProjectList: An index Route renders this. List of current projects (which are links)
					This page works by mapping the contents of the array `CurrentProjectList_contents` to corresponding `li` elements with image or videos on the side (make this a component later)
				
				/Project7
				Project7: "Development of Advanced Space Robotics Technologies to Enable Challenging In-Space Operations for ISAM and Space Logistics"
				
				/Project1
				Project1: "Development of A 3D Proximity-Operation Test System for On-Orbit Servicing a Non-Cooperative Object"
				
				...
				(and so on. the numbers after Project don't correspond to order!)

			/PriorProjects
			PriorProjects: The Prior Projects page.
				PriorProjectList: An index Route rendres this. List of prior projects (most of which are links)
					This page works by mapping the contents of the array `PriorProjectList_contents` to corresponding `li` elements.
				
				[Prior projects here]

			/Publication
			Publication: The publications page.
				This page works by mapping the contents of the arrays `ublication_contents_peers_review`, etc., to `li` elements in a reversed-index `ol` (except for _peers_review, for some reason).

# Files layout
/
	Root directory, contains git metadata, package metadata, README, todo file, tailwind config... stuff like that.

	/amplify
		Amplify files live here, not related to content itself.
	
	/node_modules
		Directory where all the modules for node packages are downloaded, not part of repo because they are downloaded automatically.
	
	/public
		Directory for files that are not processed by webpack, which combines all scripts into `bundled.js`, for instance, and hashes file names to avoid cache problems. This is used for index.html, icon paths, and such things that must have their original name.
	
	/src
		Everything else!
		
		/components
			The meat and potatoes, contains the layout for the Routes, a bunch of content (such as the specific values for projects), and exports those as components to be used for the corresponding page.
			
			/img
				Contains some images.
			
			/Projects
				Each subdirectory corresponds to a project, its component-generating js file, its css, and images and videos. As mentioned, videos are LFS pointer files here.
		
		/contents
			Contains various constant arrays of data to be filled into pages via `.map()`. Also contains some images and extra files (.pptx, for instance) that are used.
		
		/reuseables
			For components that concern contexts smaller than an entire Route. For instance, ProfileUI.

# Tailwind.css
The idea behind Tailwind is that you can represent all the various CSS rules as atomic classes, for the sake of simplicity. That way, you don't even need external css files for the same styles across unrelated components just to achieve a similar look. There's also functionality for creading "component" styles so you have a shorthand for styles that are used in a lot of places.
For example: `mt-5` represents the rule `margin-top: 1.25rem /* 20px */;` (in this case, 5/4 rem), `items-center` represents the rule `align-items: center;`. The specific values represented by these digits can be changed, and specific values can often be set even within the `className` part of a js file. You can use, for instance, `mt-[40px]` or `-p-[30vh]` to represent a margin on top of exactly 40px or padding of negative 30% of the viewport height. If using React states or variables to compose the className property, be sure to keep class names whole. So don't do `className={"text-" + (textBlack)?"black":"white"}`. Spaces are substituted with underscores.

Helper tools I added (all under `utils`):
* useDeviceSize is a function that returns an array of two React state variables, one that represents the window width and one that represents the window height.
* useScrollPosition is a function that returns a React state variable that represents how far down the document has been scrolled from the top.
* useIsOverflow takes a ref and a callback function, use `useRef()` and assign the result using the ref property to a tag you want to check the overflow state of. Returns a React state variable that is true or false depending on whether the ref'd element is currently overflowing.