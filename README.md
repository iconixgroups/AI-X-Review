2. Navigate to the project directory:
   ```
   cd AI-X-Review
   ```
3. Install the Python libraries:
   ```
   pip install -r requirements.txt
   ```
4. Build and run the Docker image:
   ```
   docker build -t ai-x-review .
   docker run -p 8080:8080 ai-x-review
