# AI-X-Review

1. Navigate to the project directory:
   ```shell
   cd AI-X-Review
   ```
2. Create a package.json file in the root directory of the project and define the necessary metadata and dependencies for the project.
3. Run `npm install` to install the dependencies defined in the package.json file.
4. Install the Python libraries:
   ```shell
   pip install -r requirements.txt
   ```
5. Build and run the Docker image:
   ```shell
   docker build -t ai-x-review .
   docker run -p 8080:8080 ai-x-review
   ```
