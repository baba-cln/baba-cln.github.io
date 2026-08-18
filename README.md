# baba-cln.github.io

Personal portfolio and CV website for **Baptiste Calin (Baba)** — Animator and Environmental Education Specialist.

## About

This is a professional portfolio website showcasing Baptiste Calin's expertise in:

- Environmental education
- Active pedagogy
- Animation and facilitation

The website is built with modern, responsive web technologies and is hosted as a GitHub Pages site.

## Technology Stack

- **Frontend Framework**: Bootstrap 5.3
- **Styling**: Custom CSS + Bootstrap utilities
- **Icons**: Bootstrap Icons
- **Typography**: Google Fonts (DM Sans, Playfair Display)
- **Language**: HTML5, CSS3, JavaScript
- **Hosting**: GitHub Pages

## Project Structure

```text
baba-cln.github.io/
├── index.html          # Main portfolio page
├── css/                # Stylesheets
├── js/                 # JavaScript behaviors
├── img/                # Image assets
├── assets/             # Additional media files
├── .devcontainer/      # Dev container configuration
├── .vscode/            # editor settings
├── LICENSE             # Project license
├── README.md           # Project documentation
└── .git/               # Git metadata
```

## Getting Started

### Prerequisites

- Docker (for DevContainer)
- VS Code with Dev Containers extension
- OR: Node.js 20+ and Python 3.12+ (for local development)

### Option 1: Using DevContainer (Recommended)

The project includes a complete DevContainer setup that provides all necessary tools out of the box.

1. **Clone the repository**:

   ```bash
   git clone https://github.com/baba-cln/baba-cln.github.io.git
   cd baba-cln.github.io
   ```

2. **Open in VS Code with DevContainer**:
   - Open the project folder in VS Code
   - When prompted, click "Reopen in Container" or use the command palette (`Ctrl+Shift+P`) and select "Dev Containers: Reopen in Container"

3. **Access the preview**:
   - After the container starts, a Python HTTP server automatically runs on port 8000
   - Nnavigate to: **`http://localhost:8000`**
   - You'll see a notification in VS Code to open the port in your browser

### Option 2: Local Development Setup

1. **Start a local server**:

   ```bash
   python3 -m http.server 8000
   ```

2. **View the site**:
   - Open `http://localhost:8000` in your browser

## DevContainer Features

The DevContainer is pre-configured with:

- **Base Image**: Node.js 20 (Debian Bookworm)
- **Additional Runtime**: Python 3.12
- **Port Forwarding**: Port 8000 (Static site preview)
- **Auto-start Server**: Python HTTP server runs automatically on container startup
- **VS Code Extensions**:
  - **Catppuccin Mocha** theme for a pleasant coding experience
  - **Live Server** for web development
  - **Prettier** for code formatting
- **VS Code Settings**:
  - Format on save enabled
  - Trailing whitespace trimmed automatically
  - HTML formatting with 120 character line wrap
  - Catppuccin Mocha color theme

### Building the DevContainer Locally

If you need to rebuild the container:

```bash
# In VS Code, use the command palette (Ctrl+Shift+P)
"Dev Containers: Rebuild Container"

# Or from CLI:
devcontainer build --workspace-folder .
```

## Viewing the Live Site

The published website is available at: `https://baba-cln.github.io`

## Files & Components

### Main Files

- **index.html** - Complete website markup
  - Navigation bar with smooth scrolling
  - Hero section with introduction
  - About, Skills, Experience, Education, and Contact sections
  - Responsive Bootstrap grid layout

- **css/style.css** - Custom styling and theme
  - Brand colors and typography
  - Responsive design utilities
  - Component-specific styles

- **js/app.js** - Interactive features and functionality

## Maintenance

### Updating Dependencies

When DevContainer versions change, the `devcontainer-lock.json` file helps maintain reproducible builds.

### Browser Compatibility

The site supports modern browsers:

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

See the [LICENSE](LICENSE) file for licensing information.

## Contributing

As this is a personal portfolio, direct contributions are limited. However, you're welcome to:

- Report issues or bugs
- Suggest improvements
- Fork the repository for your own use

## Contact

For inquiries, contact Baptiste Calin directly through the website contact section.

---

**Last Updated**: August 2026
