# AI-Powered Resume Analyzer

Welcome to the AI-Powered Resume Analyzer! This project leverages artificial intelligence to analyze and enhance resumes, providing users with valuable insights and suggestions for improvement.

## Features Overview

### MVP (Minimum Viable Product)
- **User Authentication**: Sign up, login, and manage profiles.
- **Resume Upload**: Users can upload PDF/DOC files of their resumes.
- **AI Analysis**: The system extracts text from resumes and analyzes skills using AI.
- **Keyword Matching**: Compares the resume with job descriptions to identify relevant keywords.
- **Dashboard**: Displays feedback and highlights missing skills.
- **Save & Track Changes**: Users can re-upload updated resumes and compare results over time.

### Advanced Features
- **Job Matching**: Suggests job listings based on the resume content.
- **Resume Formatting Suggestions**: AI provides suggestions to improve the layout and clarity of the resume.
- **PDF Download**: Generates an optimized PDF version of the resume with the AI's suggestions.

## Tech Stack & Architecture

### Frontend (React)
- Vite + TailwindCSS for the user interface.
- Axios for API communication.
- React Router for navigation.

### Backend (Django)
- Django REST Framework (DRF) for API development.
- PyPDF2 or PDFMiner for PDF text extraction.
- Natural Language Toolkit (NLTK) or OpenAI API for AI analysis.
- PostgreSQL on AWS RDS for database management.

### AWS Services
- Amazon RDS for the PostgreSQL database.
- Amazon S3 for storing uploaded resumes.
- AWS Lambda for optional AI processing.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- Python and pip installed on your machine.
- AWS account with RDS and S3 setup.

### Installation

#### Backend (Django)
1. Clone the repository:
    ```shell
    git clone https://github.com/VizentiN/ResumeAnalyzer.git
    ```

2. Create a virtual environment and activate it:
    ```shell
    python -m venv env source env/bin/activate # On Windows use env\Scripts\activate
    ```

3. Install the dependencies:
    ```shell
    pip install -r requirements.txt
    ```

4. Set up PostgreSQL on AWS RDS and configure the `settings.py` file with your database credentials.

5. Run the migrations:
    ```shell
    python manage.py makemigrations 
    python manage.py migrate
    ```

6. Start the Django development server:
    ```shell
    python manage.py runserver
    ```

#### Frontend (React)
1. Navigate to the frontend directory:
    ```shell
    cd ../frontend
    ```

2. Install the dependencies:
    ```shell
    npm install
    ```

3. Start the React development server:
    ```shell
    npm start
    ```

## Usage

1. Sign up and log in to your account.
2. Upload your resume in PDF or DOC format.
3. View the AI analysis and feedback on your dashboard.
4. Make improvements to your resume based on the suggestions.
5. Re-upload your updated resume to track changes and improvements.

## Contributing

We welcome contributions from the community! To contribute, please fork the repository and create a pull request with your changes. Make sure to follow the code style and include tests where applicable.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

If you have any questions or need further assistance, please feel free to contact us at [lucasvizentin.developer@gmail.com](mailto:lucasvizentin.developer@gmail.com).

---

We hope you find this project helpful! Happy coding!
