document.addEventListener('DOMContentLoaded', () => {
    const programmingSkills = {
        labels: ['Python', 'Java', 'SQL'],
        data: [90, 80, 85]
    };
    const librarySkills = {
        labels: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'TensorFlow'],
        data: [95, 90, 85, 85, 80, 75]
    };
    const toolSkills = {
        labels: ['Git/GitHub', 'VS Code', 'Jupyter', 'SQL Workbench', 'Google Colab'],
        data: [90, 95, 90, 80, 85]
    };

    const projects = [
        {
            title: "Email Fraud Detection using Machine Learning",
            description: "Implemented a machine learning model to detect fraudulent emails using supervised learning techniques. Performed data preprocessing, feature extraction, and classification using Python, Pandas, NumPy, and Scikit-learn. Visualized model performance and accuracy using Matplotlib and Seaborn to support decision-making in security systems."
        },
        {
            title: "House Price Prediction using Regularized Linear Regression",
            description: "Built a predictive model to estimate housing prices using Ridge and Lasso regression techniques. Utilized data preprocessing, exploratory data analysis, and feature engineering with Pandas, NumPy, Scikit-learn, and Matplotlib. Enhanced prediction accuracy through regularization methods, addressing overfitting and multicollinearity in the dataset."
        },
        {
            title: "Netflix Movie Recommendation using Exploratory Data Analysis",
            description: "Performed data cleaning, visualization, and insight extraction on Netflix Originals dataset using Pandas, NumPy, and Matplotlib. Conducted exploratory data analysis to identify trends in content production, genre distribution, and IMDB scores. Leveraged data-driven insights to suggest potential recommendation strategies."
        },
        {
            title: "Medical Diagnosis with Deep Learning",
            description: "Developed a deep learning model for disease classification and diagnosis from medical imaging data. Applied data preprocessing, model training, and evaluation using Python, TensorFlow/Keras, and NumPy. Performed exploratory analysis and visualized results using Matplotlib and Seaborn to interpret model performance and health insights."
        },
        {
            title: "Customer Churn Prediction",
            description: "Developed a model to predict customer churn for a subscription-based service. Utilized logistic regression and random forest classifiers, performed feature engineering to create impactful variables, and evaluated the model using precision, recall, and F1-score to provide actionable insights for customer retention."
        },
        {
            title: "Sentiment Analysis of Social Media Data",
            description: "Built an NLP model to analyze sentiment from a dataset of social media posts. Used libraries like NLTK for text preprocessing and Scikit-learn for classification. The model successfully categorized posts into positive, negative, and neutral sentiments, providing a valuable tool for brand monitoring."
        }
    ];

    const projectsGrid = document.getElementById('projects-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow';
        projectCard.innerHTML = `<h3 class="text-xl font-semibold mb-2">${project.title}</h3><p class="text-gray-600">${project.description.substring(0, 100)}...</p>`;
        projectCard.addEventListener('click', () => openModal(project));
        projectsGrid.appendChild(projectCard);
    });

    const modal = document.getElementById('projectModal');
    const closeButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    function openModal(project) {
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modal.style.display = 'block';
    }

    closeButton.onclick = () => modal.style.display = 'none';
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    const createSkillChart = (ctx, label, labels, data) => {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: label,
                    data: data,
                    backgroundColor: 'rgba(59, 130, 246, 0.5)',
                    borderColor: 'rgba(59, 130, 246, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    };

    createSkillChart(document.getElementById('programmingSkillsChart').getContext('2d'), 'Proficiency', programmingSkills.labels, programmingSkills.data);
    createSkillChart(document.getElementById('librarySkillsChart').getContext('2d'), 'Proficiency', librarySkills.labels, librarySkills.data);
    createSkillChart(document.getElementById('toolsSkillsChart').getContext('2d'), 'Proficiency', toolSkills.labels, toolSkills.data);

    const navLinks = document.querySelectorAll('a.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const menuToggleButton = document.getElementById('menu-toggle-button');
    const navbar = document.getElementById('navbar-sticky');

    menuToggleButton.addEventListener('click', () => {
        navbar.classList.toggle('hidden');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            if (!navbar.classList.contains('hidden') && window.innerWidth < 768) {
                navbar.classList.add('hidden');
            }
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});
