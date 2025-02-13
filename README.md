[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/_xAXLZeW)
# Homework 1: Code with AI

My website is hosted under [Personal Blog](https://elvira-fleury.github.io/second_website/) in a disticint repository. There you will find both the Pac-man and the latest papers. 


## Problem 1. Github Website for Your Coding Blog


I prompted Github Copilot to create the necessary files for a website that is hosted on Github. 

The first step was to create a new repository. Then, with the instructions in the homework's README I prompted Copilot to create the files. Next, I added them to the repository. Then, I manually deployed it as a webpage. I am thinking of using this as a personal website to host my code in the future, so I addded a profile picture and little blurb about myself. 


## Problem 2. Game Coding: Pac-Man

### Step-by-Step Development Process

1. **Initial Setup**:
    - Generated a square with a yellow dot that can be moved around with the arrow keys. When Pac-Man reaches the edge of the game, he wraps around to the other side.

2. **Adding Borders**:
    - Added blue borders around the game that Pac-Man cannot pass through. This was successful, and Pac-Man stops moving when he reaches the borders.

3. **Creating a Maze**:
    - Inspired by Google's Pac-Man game, generated borders in the game with my initials (ESCF). Pac-Man should not be able to pass through these borders. This required some tweaking as the letters were initially too small. I manually edited the dimensions after having Copilot comment out the HTML file.

4. **Adding Collectibles**:
    - Generated white dots throughout the maze that disappear when Pac-Man runs over them.

5. **Implementing a Counter**:
    - Included a counter at the top of the game displaying the total number of dots on the board and the number of dots Pac-Man has collected.

6. **Adding Moving Dots**:
    - Generated four dots that move around the maze randomly while respecting the borders.

7. **Collision Handling**:
    - Restarted the counter and made all dots reappear if Pac-Man collides with the moving dots.

8. **Final Touches**:
    - Modified the dots to look like ghosts and updated Pac-Man's appearance to face the direction he is moving.

9. **Completion**:
    - The game is now complete with all the desired functionalities.

I found this step-by-step approach made it easier to follow along and troubleshoot manually when necessary.

## Problem 3. Data Scaffolding from the Internet

For this problem, I also implemented a step-by-step approach. The first step was to understand how queries in arXiv work. Once I understood the queries and their results, I refined my query to return papers related to in vitro fertilization. Once satisfied with the query, I began incorporating it into the website.

### How `papers.html` and `update-papers` Work Together

The `papers.html` file serves as the template for displaying the latest papers from arXiv. However, it does not contain any static information about the papers. Instead, the information is dynamically fetched when the page is opened.

Here's how it works:

1. **`papers.html`**: This HTML file contains the structure and layout for displaying the list of papers. It includes placeholders where the paper information will be inserted. It also includes a script that runs when the page is loaded.

2. **`update-papers`**: This script is responsible for fetching the latest papers from arXiv based on the specified keywords. When the `papers.html` page is opened, the script sends a request to the arXiv API to retrieve the latest papers. The script then processes the response and dynamically updates the content of `papers.html` with the fetched paper information.

This approach ensures that the information displayed on the `papers.html` page is always up-to-date with the latest papers from arXiv. By fetching the data dynamically, we avoid the need to manually update the HTML file with new paper information.

### Example Workflow

1. User opens `papers.html` in their browser.
2. The script in `papers.html` sends a request to the arXiv API to fetch the latest papers.
3. The `update-papers` script processes the API response and updates the HTML content with the fetched paper information.
4. The user sees the latest papers displayed on the `papers.html` page.

This dynamic fetching and updating process ensures that the user always sees the most recent and relevant papers without any manual intervention.





